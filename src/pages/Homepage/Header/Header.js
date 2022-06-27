import React, { useState } from "react";
import FlexContainer from "../../../components/UI/atoms/Container/FlexContainer";
import { MobileLogo } from "../../../asset/logo/Logo";
import Menu from "./Tablet/Menu/Menu";
import SideMenu from "./Mobile/SideMenu/SideMenu";
import SideMenuButton from "./Mobile/SideMenuButton/SideMenuButton";

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
      <SideMenuButton onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}/>
      {isSideMenuOpen && <SideMenu close={() => handleCloseSideMenu()}/>}
    </FlexContainer>
  );
}

export default Header;
