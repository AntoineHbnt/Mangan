import React from "react";
import Container from "../../atoms/Container/Container";
import FlexContainer from "../../atoms/Container/FlexContainer";
import ContentHeader from "../../molecules/ContentHeader/ContentHeader";
import RecipeCard from "../../molecules/RecipeCard/RecipeCard";

function RecipesListContent() {
  const headerStyle = {
    marginBottom: "50px",
  };

  const gridStyle = {
    rowGap: "20px",
    flexWrap: "wrap",

    "& > div": {
      width: `33.33%`,
      height: "550px",

      "@tablet": {
        width: `50%`,
      },
    },
  };

  return (
    <FlexContainer width="100%" flexDirection="column">
      <Container
        width="100%"
        height="fit-content"
        css={headerStyle}
      >
        <ContentHeader label="Discover Our Community Recipes" />
      </Container>
      <FlexContainer width="100%" height="fit-content" css={gridStyle}>
        <RecipeCard key="1" id="1" />
        <RecipeCard key="2" id="2" />
        <RecipeCard key="3" id="3" />
        <RecipeCard key="4" id="4" />
        <RecipeCard key="5" id="5" />
        <RecipeCard key="6" id="6" />
      </FlexContainer>
    </FlexContainer>
  );
}

export default RecipesListContent;
