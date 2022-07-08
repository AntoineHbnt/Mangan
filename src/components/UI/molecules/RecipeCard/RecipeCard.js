import React from "react";
import Button from "components/UI/atoms/Button/Button";
import RecipeCardChefInfo from "components/UI/molecules/RecipeCardChefInfo/RecipeCardChefInfo";
import RecipeCardDescription from "components/UI/molecules/RecipeCardDescription/RecipeCardDescription";
import RecipeCardPicture from "components/UI/molecules/RecipeCardPicture/RecipeCardPicture";
import { Card, Wrapper } from "./RecipeCard.styles";

function RecipeCard() {
  return (
    <Wrapper>
      <Card>
        <RecipeCardPicture src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <RecipeCardDescription title="Tommato Pasta">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, culpa.{" "}
        </RecipeCardDescription>
        <RecipeCardChefInfo />
        <Button value="View Recipe" />
      </Card>
    </Wrapper>
  );
}

export default RecipeCard;
