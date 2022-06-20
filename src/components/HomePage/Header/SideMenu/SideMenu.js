import React from "react";
import PropTypes from "prop-types";
import FlexContainer from "../../../../template/Container/FlexContainer";
import { styled } from "../../../../Themes";
import { NavItem } from "../../../UI/asset/StyledTypography";

function SideMenu({ close }) {
  const flexStyle = {
    display: "none",
    position: "absolute",
    top: 0,
    right: 0,
    padding: "$16",
    width: "40vw",
    height: "100vh",
    background: "$black_2",
    zIndex: 30,

    "@mobile": {
      display: "flex",
    },
  };

  const menuStyle = {
    
  }

  const Background = styled("div", {
    display: "none",
    position: "fixed",
    zIndex: 20,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",

    "@mobile": {
      display: "flex",
    },
  });

  return (
    <>
      <FlexContainer flexDirection="column" css={flexStyle}>
        <FlexContainer gap="$4" flexDirection="column" css={menuStyle}>
          <NavItem>Home</NavItem>
          <NavItem>Recipes</NavItem>
          <NavItem>Chef</NavItem>
          <NavItem>Blog</NavItem>
          <NavItem>Contact</NavItem>
        </FlexContainer>
      </FlexContainer>
      <Background onClick={close} />
    </>
  );
}

SideMenu.propTypes = {
  close: PropTypes.func.isRequired,
};

export default SideMenu;
