import React from "react";
import ContentHeader from "components/UI/molecules/ContentHeader/ContentHeader";
import RecipeCard from "components/UI/molecules/RecipeCard/RecipeCard";
import { Grid, Header, Wrapper } from "./RecipesListContent.styles";

function RecipesListContent() {

  return (
    <Wrapper>
      <Header>
        <ContentHeader label="Discover Our Community Recipes" />
      </Header>
      <Grid>
        <RecipeCard key="1" id="1" />
        <RecipeCard key="2" id="2" />
        <RecipeCard key="3" id="3" />
        <RecipeCard key="4" id="4" />
        <RecipeCard key="5" id="5" />
        <RecipeCard key="6" id="6" />
      </Grid>
    </Wrapper>
  );
}

export default RecipesListContent;
