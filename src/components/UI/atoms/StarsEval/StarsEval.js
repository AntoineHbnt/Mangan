import React from "react";
import PropTypes from "prop-types";
import { styled } from "@stitches-config";
import StarIcon from "@asset/icons/Star";

function StarsEval({ value }) {
  const StyledValue = styled("span", {
    fontSize: "$14",
    color: "$light_gray",
    fontFamily: "$poppins",
  });

  const Wrapper = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    border: "2px solid $light_gray",
  });

  return (
    <Wrapper>
      <StyledValue>{value}</StyledValue>
      <StarIcon css={{ width: "12px", fill: "$light_gray" }} />
    </Wrapper>
  );
}

StarsEval.propTypes = {
  value: PropTypes.number.isRequired,
};

export default StarsEval;
