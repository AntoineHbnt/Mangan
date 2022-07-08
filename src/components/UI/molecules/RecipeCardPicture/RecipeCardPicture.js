import React, { useState } from "react";
import PropTypes from "prop-types";
import Picture from "components/UI/atoms/Picture/Picture";
import LikeHeart from "components/UI/atoms/LikeHeart/LikeHeart";
import StarsEval from "components/UI/atoms/StarsEval/StarsEval";
import { HoverContainer, Wrapper } from "./RecipeCardPicture.styles";

function RecipeCardPicture({src}) {
  const [isLiked, setIsLiked] = useState(false);

  const pictureStyle = {
    aspectRatio: "10/11",
    background: "$gray",
    borderRadius: "6px 6px 0 0 ",
    overflow: "hidden",
  };

  const handleClick = () => {
    setIsLiked(!isLiked);
  }
    

  return (
    <Wrapper>
      <Picture src={src} css={pictureStyle} />
      <HoverContainer>
        <LikeHeart isLiked={isLiked} onClick={() => handleClick()}/>
        <StarsEval value={5}/>
      </HoverContainer>
    </Wrapper>
  );
}

RecipeCardPicture.propTypes = {
  src: PropTypes.string.isRequired,
}

export default RecipeCardPicture;
