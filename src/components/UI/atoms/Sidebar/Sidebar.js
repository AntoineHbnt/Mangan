import React from "react";
import { styled } from "@stitches-config";
import PropTypes from "prop-types";

function Sidebar({ children }) {
  const Wrapper = styled("div", {
    flexDirection: "column",
    display: "flex",
    width: "100%",
    height: "fit-content",
    gap: "50px",
    border: "1px solid $light_gray",
    borderRadius: "6px",
    padding: "50px 25px",
    background: "$white",
  });

  return <Wrapper>{children}</Wrapper>;
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
