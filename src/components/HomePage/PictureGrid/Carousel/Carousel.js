import React from "react";
import Container from "../../../../template/Container/Container";
import FlexContainer from "../../../../template/Container/FlexContainer";
import { H2 } from "../../../UI/asset/StyledTypography";
import PictureContainer from "../PictureContainer/PictureContainer";

function Carousel() {
  const flexStyle = {
    flex: 1,
    background: "green",

    "@smallScreen": {
      display: "none",
    },
  };

  return (
    <FlexContainer height="100%" flexDirection="column" css={flexStyle}>
      <Recipe />
      <Recipe />
      <Recipe />
    </FlexContainer>
  );
}

function Recipe() {
  return (
    <Container
      width="100%"
      height="calc(100% / 3)"
      css={{ background: "purple" }}
    >
      <PictureContainer />
      <Container
        padding="40px"
        css={{ position: "absolute", top: 0, left: 0, zIndex: 10 }}
      >
        <FlexContainer height="100%" alignItems="flex-end">
          <H2
            css={{
              color: "$white",
              fontSize: "$36",
              lineHeight: "$45",
              textShadow: "4.357px 6.709px 34.58px rgba(0, 0, 0, 0.27)",
            }}
          >
            Recipe Label
          </H2>
        </FlexContainer>
      </Container>
    </Container>
  );
}

export default Carousel;
