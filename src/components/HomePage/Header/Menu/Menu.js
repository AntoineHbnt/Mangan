import React from "react";
import FlexContainer from "../../../../template/Container/FlexContainer";
import { NavItem } from "../../../UI/asset/StyledTypography";

function Menu() {
  
  const flexStyle = {
    "@mobile": {
      display: "none",
    },
  };

  const navItemStyle = {
    color: "$white",
  };

  return (
    <FlexContainer width="50%" justifyContent="center" css={flexStyle}>
      <FlexContainer gap="32px">
        <NavItem css={navItemStyle}>Home</NavItem>
        <NavItem css={navItemStyle}>Recipes</NavItem>
        <NavItem css={navItemStyle}>Chef</NavItem>
        <NavItem css={navItemStyle}>Blog</NavItem>
        <NavItem css={navItemStyle}>Contact</NavItem>
      </FlexContainer>
    </FlexContainer>
  );
}

export default Menu;
