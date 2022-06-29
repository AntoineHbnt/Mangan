import React from "react";
import PropTypes from "prop-types";
import { styled } from "../../../../Themes";

function Button({ value, onClick, css }) {
  const StyledInputSubmit = styled("input", {
    position: "relative",
    width: "100%",
    height: "50px",
    background: "$red",
    color: "$white",
    border: "none",
    borderRadius: 999,
    fontSize: "$18",
    fontFamily: "$poppins",
    cursor: "pointer",
    transition: "all .2s ease-in",

    "&:hover": {
      background: "$darker_red",
    },
  });

  return (
    <StyledInputSubmit
      css={css}
      type="submit"
      value={value}
      onClick={onClick}
    />
  );
}

Button.propTypes = {
  value: PropTypes.string,
  css: PropTypes.shape({}),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  value: "",
  onClick: {},
  css: {},
};

export default Button;
