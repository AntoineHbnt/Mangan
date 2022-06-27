import React from "react";
import FlexContainer from "../../atoms/Container/FlexContainer";
import { Logo } from "../../../../asset/logo/Logo";
import Navbar from "../../molecules/Navbar/Navbar";

function Header() {
  return (
    <FlexContainer
      width="100%"
      height="100%"
      alignItems="center"
      css={{
        margin: "auto",
        minHeight: "100px",
        maxWidth: "1170px",
      }}
    >
      <FlexContainer css={{ flex: 1 }}>
        <Logo />
      </FlexContainer>
      <FlexContainer css={{ marginLeft: "30px",flex: 3 }}>
        <Navbar />
      </FlexContainer>
    </FlexContainer>
  );
}

export default Header;
