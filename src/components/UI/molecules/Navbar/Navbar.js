import React from "react";
import LinkItem from "@atoms/LinkItem/LinkItem";
import Wrapper from "./Navbar.styles";

function Navbar() {
  const linkStyle = {
    cursor: "pointer",
    "&:hover": {
      fontWeight: 600,
    },
  };

  return (
    <Wrapper>
      <LinkItem css={linkStyle} path="/" label="Home" />
      <LinkItem css={linkStyle} path="/recipes" label="Recipes" active />
      <LinkItem css={linkStyle} path="/chefs" label="Chefs" />
      <LinkItem css={linkStyle} path="/blog" label="Blog" />
      <LinkItem css={linkStyle} path="/contact" label="Contact" />
    </Wrapper>
  );
}

export default Navbar;
