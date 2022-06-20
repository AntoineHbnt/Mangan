import React from "react";
import PropTypes from "prop-types";
import Cross from "../asset/icons/Cross";
import ThreeLineMenuIcon from "../asset/icons/ThreeLineMenuIcon";
import { styled } from "../../../Themes";

function ThreeLineMenuButton({ isOpen, onClick }) {
  const StyledInput = styled("button", {
    width: "fit-content",
    height: "fit-content",
    cursor: "pointer",
    background: "none",
    border: "none",
    display: "none",

    "@mobile": {
      display: "block",
    },
  });

  return (
    <StyledInput type="submit" onClick={onClick}>
      {isOpen ? <Cross /> : <ThreeLineMenuIcon />}
    </StyledInput>
  );
}

ThreeLineMenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ThreeLineMenuButton;
