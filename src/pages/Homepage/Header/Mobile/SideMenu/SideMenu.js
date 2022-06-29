import React from "react";
import PropTypes from "prop-types";
import { keyframes, styled } from "@stitches/react";
import FlexContainer from "../../../../../components/UI/atoms/Container/FlexContainer";
import SocialMedia from "../../../SocialMedia/SocialMedia";
import SideMenuButton from "../SideMenuButton/SideMenuButton";
import LinkItem from "../../../../../components/UI/atoms/LinkItem/LinkItem";

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
          <LinkItem css={navItemStyle} path="/" label="Home" active />
          <LinkItem css={navItemStyle} path="/recipes" label="Recipes" />
          <LinkItem css={navItemStyle} path="/chefs" label="Chefs" />
          <LinkItem css={navItemStyle} path="/blog" label="Blog" />
          <LinkItem css={navItemStyle} path="/contact" label="Contact" />
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
