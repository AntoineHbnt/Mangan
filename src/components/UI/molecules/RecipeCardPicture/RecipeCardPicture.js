import React, { useState } from "react";
import PropTypes from "prop-types";
import Container from "../../atoms/Container/Container";
import Picture from "../../atoms/Picture/Picture";
import LikeHeart from "../../atoms/LikeHeart/LikeHeart";
import FlexContainer from "../../atoms/Container/FlexContainer";
import StarsEval from "../../atoms/StarsEval/StarsEval";

function RecipeCardPicture({src}) {
  const [isLiked, setIsLiked] = useState(false);

  const pictureStyle = {
    aspectRatio: "10/11",
    background: "$gray",
    borderRadius: "6px 6px 0 0 ",
    overflow: "hidden",
  };

  const flexStyle = {
    position: "absolute",
    top: "0",
    right: "0",
    padding: "$18",
  }

  const handleClick = () => {
    setIsLiked(!isLiked);
  }
    

  return (
    <Container>
      <Picture src={src} css={pictureStyle} />
      <FlexContainer height="100%" flexDirection="column" alignItems="center" justifyContent="space-between" css={flexStyle}>
        <LikeHeart isLiked={isLiked} onClick={() => handleClick()}/>
        <StarsEval value={5}/>
      </FlexContainer>
    </Container>
  );
}

RecipeCardPicture.propTypes = {
  src: PropTypes.string.isRequired,
}

export default RecipeCardPicture;
