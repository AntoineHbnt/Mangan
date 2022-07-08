import React from "react";
import FlexContainer from "components/UI/atoms/Container/FlexContainer";
import LinkItem from "components/UI/atoms/LinkItem/LinkItem";

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
        <LinkItem css={navItemStyle} path="/" label="Home" active />
        <LinkItem css={navItemStyle} path="/recipes" label="Recipes" />
        <LinkItem css={navItemStyle} path="/chefs" label="Chefs" />
        <LinkItem css={navItemStyle} path="/blog" label="Blog" />
        <LinkItem css={navItemStyle} path="/contact" label="Contact" />
      </FlexContainer>
    </FlexContainer>
  );
}

export default Menu;
