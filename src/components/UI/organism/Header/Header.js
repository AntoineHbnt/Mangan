import React from "react";
import { Logo } from "../../../../asset/logo/Logo";
import Navbar from "../../molecules/Navbar/Navbar";
import { LogoContainer, NavbarContainer, Wrapper } from "./Header.styles";

function Header() {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
    </Wrapper>
  );
}

export default Header;
