import { React } from "react";
import Container from "../../../template/Container/Container";
import FlexContainer from "../../../template/Container/FlexContainer";
import Button from "../../UI/asset/Button/Button";
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
  return (
    <FlexContainer height="100%" css={{ background: "red", flex: 2 }}>
      <PictureContainer />
      <Container
        padding="80px"
        css={{ position: "absolute", top: 0, left: 0, zIndex: 10 }}
      >
        <FlexContainer
          height="100%"
          width="70%"
          flexDirection="column"
          justifyContent="flex-end"
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
          <Span css={{fontSize: "20px" , lineHeight: '30px', marginBottom: '40px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, doloremque suscipit. Dolor earum officiis suscipit!
          </Span>
          <Button css={{width: "250px", height: "65px"}}/>
        </FlexContainer>
      </Container>
    </FlexContainer>
  );
}

export default PictureGrid;
