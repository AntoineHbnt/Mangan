import React from "react";
import PropTypes from "prop-types";
import { keyframes } from "@stitches/react";
import FlexContainer from "../../../../../template/Container/FlexContainer";
import SocialMedia from "../../../SocialMedia/SocialMedia";
import { styled } from "../../../../../Themes";
import { NavItem } from "../../../../UI/asset/StyledTypography";
import SideMenuButton from "../SideMenuButton/SideMenuButton";

function SideMenu({ close }) {
  const showSideMenu = keyframes({
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(0%)",
    },
  });

  const showBackground = keyframes({
    "0%": {
      opacity: "0",
    },
    "100%": {
      opacity: "100%",
    },
  });

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
    animation: `.1s ${showSideMenu} linear`,

    "@mobile": {
      display: "flex",
    },
  };

  const navItemStyle = {
    fontSize: "$16",
    lineHeight: "$18",
    color: "$white",
  };

  const Background = styled("div", {
    display: "none",
    position: "fixed",
    zIndex: 20,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    animation: `.1s ${showBackground} linear`,

    "@mobile": {
      display: "flex",
    },
  });

  return (
    <>
      <FlexContainer
        flexDirection="column"
        justifyContent="space-between"
        css={flexStyle}
      >
        <FlexContainer gap="$8" flexDirection="column">
          <SideMenuButton isOpen onClick={close} />
          <NavItem css={navItemStyle}>Home</NavItem>
          <NavItem css={navItemStyle}>Recipes</NavItem>
          <NavItem css={navItemStyle}>Chef</NavItem>
          <NavItem css={navItemStyle}>Blog</NavItem>
          <NavItem css={navItemStyle}>Contact</NavItem>
        </FlexContainer>
        <SocialMedia />
      </FlexContainer>
      <Background onClick={close} />
    </>
  );
}

SideMenu.propTypes = {
  close: PropTypes.func.isRequired,
};

export default SideMenu;
