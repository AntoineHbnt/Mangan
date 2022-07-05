import React from "react";
import { styled } from "@stitches-config";
import PropTypes from "prop-types";
import HeartIcon from "@asset/icons/Heart";

function LikeHeart({ isLiked, onClick }) {
  const ButtonStyled = styled("button", {
    width: "25px",
    height: "25px",
    background: "none",
    border: "none",
    padding: "0",
    cursor: "pointer",
  });

  const heartStyle = {
    width: "100%",
    fill: isLiked ? "$red" : "$light_gray",
  };

  return (
    <ButtonStyled onClick={onClick}>
      <HeartIcon css={heartStyle} />
    </ButtonStyled>
  );
}

LikeHeart.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LikeHeart;
