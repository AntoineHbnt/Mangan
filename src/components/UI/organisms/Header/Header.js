import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "asset/logo/Logo";
import Navbar from "components/UI/molecules/Navbar/Navbar";
import ThreeLineMenu from "asset/icons/ThreeLineMenuIcon";
import Cross from "asset/icons/Cross";
import { ButtonMenu, LogoContainer, NavbarContainer, Wrapper } from "./Header.styles";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <Wrapper>
      <LogoContainer>
        <Link to="/">
          <Logo />
        </Link>
      </LogoContainer>
      <NavbarContainer open={isMenuOpen}>
        <Navbar />
      </NavbarContainer>
      <ButtonMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? 
          <Cross css={{fill: "$black"}}/>
          : 
          <ThreeLineMenu css={{fill: "$black"}} /> }
      </ButtonMenu>
    </Wrapper>
  );
}

export default Header;
