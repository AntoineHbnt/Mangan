import React from "react";
import FlexContainer from "../../atoms/Container/FlexContainer";
import LinkItem from "../../atoms/LinkItem/LinkItem";

function Navbar() {
  const linkStyle = {
    cursor: "pointer",
    "&:hover": {
      fontWeight: 600,
    },
  };

  return (
    <FlexContainer width="fit-content" gap="55px">
      <LinkItem css={linkStyle} path="/" label="Home" />
      <LinkItem css={linkStyle} path="/recipes" label="Recipes" active />
      <LinkItem css={linkStyle} path="/chefs" label="Chefs" />
      <LinkItem css={linkStyle} path="/blog" label="Blog" />
      <LinkItem css={linkStyle} path="/contact" label="Contact" />
    </FlexContainer>
  );
}

export default Navbar;
