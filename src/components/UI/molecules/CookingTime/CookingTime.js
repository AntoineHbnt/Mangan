import React from "react";
import { styled } from "stitches.config";
import Container from "components/UI/atoms/Container/Container";
import FlexContainer from "components/UI/atoms/Container/FlexContainer";
import CookingTimeOption from "components/UI/atoms/CookingTimeOption/CookingTimeOption";

function CookingTime() {
  const Line = styled("div", {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "100%",
    height: "3px",
    background: "$light_gray",
  });

  return (
    <Container height="64px" css={{marginTop: "25px"}}>
      <Line />
      <FlexContainer
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <CookingTimeOption label="15 mins" />
        <CookingTimeOption label="30 mins" />
        <CookingTimeOption label="45 mins" active/>
        <CookingTimeOption label="60 mins" />
        <CookingTimeOption label="> 1h" />
      </FlexContainer>
    </Container>
  );
}



export default CookingTime;
