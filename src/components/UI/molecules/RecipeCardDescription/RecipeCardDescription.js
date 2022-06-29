import React from "react";
import PropTypes from "prop-types";
import { H3, Span } from "@asset/Typography";
import Wrapper from "./RecipeCardDescription.styles";

function RecipeCardDescription({ title, children }) {
  const spanStyle = {
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };

  return (
    <Wrapper>
      <H3>{title}</H3>
      <Span css={{ spanStyle }}>{children}</Span>
    </Wrapper>
  );
}

RecipeCardDescription.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default RecipeCardDescription;
