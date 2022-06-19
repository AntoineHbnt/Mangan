import { React } from "react";
import FlexContainer from "../../../template/Container/FlexContainer";
import Button from "../../UI/Button/Button";
import { H1, Span } from "../../UI/asset/StyledTypography";
import Carousel from "./Carousel/Carousel";
import PictureContainer from "./PictureContainer/PictureContainer";

function PictureGrid() {
  return (
    <FlexContainer height="100%" css={{ flex: 1 }}>
      <ActiveRecipe />
      <Carousel />
    </FlexContainer>
  );
}

function ActiveRecipe() {
  /* const textContainerStyle = {
    
  }; */

  const flexStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    padding: "80px",

    "@smallScreen": {
      width: "100%",
    },
    "@mobile": {
      alignItems: "center",
      padding: "40px",
    },
  };

  return (
    <FlexContainer height="100%" css={{ flex: 2 }}>
      <PictureContainer />

      <FlexContainer
        height="100%"
        width="70%"
        flexDirection="column"
        justifyContent="flex-end"
        css={flexStyle}
      >
        <H1
          css={{
            color: "$white",
            fontSize: "$80",
            lineHeight: "$90",
            textShadow: "4.357px 6.709px 34.58px rgba(0, 0, 0, 0.27)",
            marginBottom: "$48",
          }}
        >
          Lorem ipsum dolor sit amet.
        </H1>
        <Span
          css={{ fontSize: "20px", lineHeight: "30px", marginBottom: "40px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          doloremque suscipit. Dolor earum officiis suscipit!
        </Span>
        <Button value="Show Recipe" css={{ width: "250px", height: "65px" }} />
      </FlexContainer>
    </FlexContainer>
  );
}

export default PictureGrid;
