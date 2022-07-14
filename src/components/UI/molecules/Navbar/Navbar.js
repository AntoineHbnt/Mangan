import React from "react";
import LinkItem from "components/UI/atoms/LinkItem/LinkItem";
import Wrapper from "./Navbar.styles";

function Navbar() {
  const linkStyle = {
    cursor: "pointer",

    "&:hover > span": {
      fontWeight: 600,
    },

    "@smallScreen": {
      height: "100%",
      display: "flex",
      justifyContent: "center",
    },

    "@mobile": {
      height: "100%",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.05)",
      },
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
