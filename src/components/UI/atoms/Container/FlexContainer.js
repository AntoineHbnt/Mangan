import React from "react";
import PropTypes from "prop-types";
import { styled } from "@stitches-config";

function FlexContainer({
  width,
  height,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  children,
  css,
}) {
  const StyledFlex = styled("div", {
    width,
    height,
    display: "flex",
    flexDirection,
    justifyContent,
    alignItems,
    gap,
    position: "relative",

    variants: {
      display: {
        none: "none"
      }
    }
  });

  return <StyledFlex css={css}>{children}</StyledFlex>;
}

FlexContainer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  gap: PropTypes.string,
  children: PropTypes.node,
  css: PropTypes.shape({}),
};

FlexContainer.defaultProps = {
  width: "auto",
  height: "auto",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "0",
  children: "",
  css: {},
};

export default FlexContainer;
