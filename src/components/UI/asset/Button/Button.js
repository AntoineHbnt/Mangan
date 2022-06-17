import React from "react";
import PropTypes from "prop-types";
import { styled } from "../../../../Themes";

function Button({ css }) {
  const StyledInputSubmit = styled("input", {
    width: "220px",
    height: "50px",
    background: "$red",
    color: "$white",
    border: "none",
    borderRadius: 999,
    fontSize: "$18",
    fontFamily: "$poppins",
  });

  return <StyledInputSubmit css={css}type="submit" value="Show Recipe" />;
}

Button.propTypes = {
  css: PropTypes.shape({}),
};

Button.defaultProps = {
  css: {},
};

export default Button;
