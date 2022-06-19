import React from "react";
import FlexContainer from "../../../template/Container/FlexContainer";
import Logo from "../../UI/asset/logo/Logo";

function Header() {
  const headerStyle = {
    display: "none",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "20",

    "@tablet": {
      display: "flex",
    },
  };

  return (
    <FlexContainer justifyContent="center" width="100%" height="48px" css={headerStyle}>
      <Logo />
    </FlexContainer>
  );
}

export default Header;
