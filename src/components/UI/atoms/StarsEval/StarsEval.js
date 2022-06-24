import React from "react";
import PropTypes from "prop-types";
import { styled } from "@stitches/react";
import FlexContainer from "../Container/FlexContainer";
import StarIcon from "../../../../asset/icons/Star";

function StarsEval({ value }) {
  const StyledValue = styled("span", {
    fontSize: "$14",
    color: "$light_gray",
    fontFamily: "$poppins",
  });

  const flexStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    border: "2px solid $light_gray",
  };

  return (
    <FlexContainer
      alignItems="center"
      justifyContent="center"
      width="50px"
      height="50px"
      css={flexStyle}
    >
      <StyledValue>{value}</StyledValue>
      <StarIcon css={{ width: "12px", fill: "$light_gray" }} />
    </FlexContainer>
  );
}

StarsEval.propTypes = {
  value: PropTypes.number.isRequired,
};

export default StarsEval;
