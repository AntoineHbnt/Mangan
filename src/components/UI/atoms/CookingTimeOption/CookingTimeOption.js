import React from "react";
import PropTypes from "prop-types";
import { styled } from "@stitches-config";
import { Span } from "@typography";

function CookingTimeOption({ label, active, css }) {

  const Wrapper = styled("div", {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
  })

  const Circle = styled("div", {
    width: "10px",
    height: "10px",
    background: "$light_gray",
    borderRadius: 999,
    border: "2px solid $white",

    variants: {
      active: {
        true: {
          width: "15px",
          height: "15px",
          background: "$red",
        },
      },
    },
  });

  const spanStyle = {
    top: 0,
    transform: 'translate(-30%)',
    position: "absolute",
    color: "$red",
    textAlign: "center",
    whiteSpace: "nowrap",
  };

  return (
    <Wrapper css={css}>
      <Span css={{ ...spanStyle }}>{active && label}</Span>
      <Circle active={active} />
    </Wrapper>
  );
}

CookingTimeOption.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  css: PropTypes.shape({}),
};

CookingTimeOption.defaultProps = {
  active: false,
  css: {},
};

export default CookingTimeOption;
