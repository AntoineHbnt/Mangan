import React from "react";
import Button from "../../atoms/Button/Button";
import RecipeCardChefInfo from "../RecipeCardChefInfo/RecipeCardChefInfo";
import RecipeCardDescription from "../RecipeCardDescription/RecipeCardDescription";
import RecipeCardPicture from "../RecipeCardPicture/RecipeCardPicture";
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
