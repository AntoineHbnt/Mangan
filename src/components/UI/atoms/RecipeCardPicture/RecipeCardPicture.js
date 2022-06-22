import React from "react";
import Container from "../Container/Container";

function RecipeCardPicture() {
  const pictureStyle = {
    aspectRatio: "10/11",
    background: "$gray",
    borderRadius: "6px 6px 0 0 "
  };

  return <Container width="100%" height="auto" css={pictureStyle}/>;
}

export default RecipeCardPicture;
