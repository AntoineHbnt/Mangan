import React from "react";
import PropTypes from "prop-types";
import { styled } from "@stitches-config";
import Cross from "@asset/icons/Cross";
import ThreeLineMenu from "@asset/icons/ThreeLineMenuIcon";

function SideMenuButton({ onClick, isOpen }) {
  const StyledButton = styled("button", {
    display: "none",
    width: "fit-content",
    height: "fit-content",
    background: "none",
    border: "none",

    "@mobile": {
      display: "block",
    },
  });

  return (
    <StyledButton onClick={onClick}>
      {isOpen ? <Cross /> : <ThreeLineMenu />}
    </StyledButton>
  );
}

SideMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SideMenuButton;
