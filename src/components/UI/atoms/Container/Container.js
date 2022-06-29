import React from "react";
import PropTypes from "prop-types";
import { styled } from "@stitches-config";

function Container ({ width, height, padding, margin, css, children}) {
  const StyledContainer = styled("div", {
    width,
    height,
    padding,
    margin,
    position: 'relative',
  });

  return <StyledContainer css={css}>
    {children}
  </StyledContainer>;
};

Container.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  css: PropTypes.shape({}),
  children: PropTypes.node
};

Container.defaultProps = {
  width: "100%",
  height: "100%",
  padding: "0px",
  margin: "0px",
  css: {},
  children: ''
};

export default Container;
