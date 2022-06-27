import React from "react";
import Container from "../../../../components/UI/atoms/Container/Container";
import { styled } from "../../../../Themes";

function PictureContainer() {
  const PictureFilter = styled("div", {
    position: "relative",
    width: "100%",
    height: "100%",

    "&:after": {
      position: "absolute",
      content: "",
      height: "100%",
      width: "100%",
      top: "0",
      left: "0",
      background:
        "linear-gradient(to bottom, rgba(255,0,0,0) 0%,rgba(22,18,16,1) 100%)",
    },
  });

  const Picture = styled("img", {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  });

  return (
    <Container css={{ background: "$black" }}>
      <PictureFilter>
        <Picture
          src="https://www.foodiesfeed.com/wp-content/uploads/2021/01/hot-shakshuka.jpg"
          alt="pizza"
        />
      </PictureFilter>
    </Container>
  );
}

export default PictureContainer;
