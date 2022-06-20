import React, { useState } from "react";
import FlexContainer from "../../../template/Container/FlexContainer";
import { MobileLogo } from "../../UI/asset/logo/Logo";
import ThreeLineMenuButton from "../../UI/ThreeLineMenuButton/ThreeLineMenuButton";
import Menu from "./Menu/Menu";
import SideMenu from "./SideMenu/SideMenu";

function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleCloseSideMenu = () => {
    setIsSideMenuOpen(false)
  }

  const headerStyle = {
    display: "none",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "20",
    padding: "$80",

    "@tablet": {
      display: "flex",
      flexDirection: "column",
    },

    "@mobile": {
      flexDirection: "row",
      padding: "$48",
    },
  };

  return (
    <FlexContainer
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      height="fit-content"
      css={headerStyle}
    >
      <MobileLogo />
      <Menu />
      <ThreeLineMenuButton
        isOpen={isSideMenuOpen}
        onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
      />
      {isSideMenuOpen && <SideMenu close={() => handleCloseSideMenu()}/>}
    </FlexContainer>
  );
}

export default Header;
