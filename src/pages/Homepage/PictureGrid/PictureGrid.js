import { React } from "react";
import { Link } from "react-router-dom";
import FlexContainer from "components/UI/atoms/Container/FlexContainer";
import Button from "components/UI/atoms/Button/Button";
import { H1, Span } from "asset/Typography";
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
  const h1Style = {
    color: "$white",
    fontSize: "$80",
    lineHeight: "$90",
    textShadow: "4.357px 6.709px 34.58px rgba(0, 0, 0, 0.27)",
    marginBottom: "$48",
    lineClamp: 3,

    "@tablet": {
      fontSize: "$48",
      lineHeight: "$64",
    },
  };

  const spanStyle = {
    fontSize: "20px",
    lineHeight: "30px",
    marginBottom: "40px",
  };

  const flexStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    padding: "$80",

    "@smallScreen": {
      width: "100%",
    },
    "@mobile": {
      alignItems: "center",
      padding: "$48",
    },
  };

  return (
    <FlexContainer height="100vh" css={{ minHeight: "640px", flex: 2 }}>
      <PictureContainer />

      <FlexContainer
        height="100%"
        width="85%"
        flexDirection="column"
        justifyContent="flex-end"
        css={flexStyle}
      >
        <H1 css={h1Style}>Pan Pizza with Sliced Beef Sosis</H1>
        <Span css={spanStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          doloremque suscipit. Dolor earum officiis suscipit!
        </Span>
        <Link to="/recipes">
         <Button value="Show Recipe" css={{ width: "250px", height: "65px" }} />
        </Link>
      </FlexContainer>
    </FlexContainer>
  );
}

export default PictureGrid;
