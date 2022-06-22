import React from "react";
import Container from "../../atoms/Container/Container";
import FlexContainer from "../../atoms/Container/FlexContainer";
import ContentHeader from "../../molecules/ContentHeader/ContentHeader";
import RecipeCard from "../../molecules/RecipeCard/RecipeCard";

function RecipesListContent() {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    rowGap: "20px",
  };

  return (
    <FlexContainer width="100%" flexDirection="column">
      <Container width="100%" height="fit-content" css={{marginBottom: "50px"}}>
        <ContentHeader label="Discover Our Community Recipes" />
      </Container>
      <FlexContainer width="100%" height="fit-content" css={gridStyle}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </FlexContainer>
    </FlexContainer>
  );
}

export default RecipesListContent;
