import React from "react";
import FlexContainer from "../../atoms/Container/FlexContainer";
import RecipeCardPicture from "../../atoms/RecipeCardPicture/RecipeCardPicture";
import RecipeCardChefInfo from "../RecipeCardChefInfo/RecipeCardChefInfo";
import RecipeCardDescription from "../RecipeCardDescription/RecipeCardDescription";

function RecipeCard() {
  const cardStyle = {
    padding: "15px",
  };

  return (
    <FlexContainer
      flexDirection="column"
      width="100%"
      height="fit-content"
      gap="30px"
      css={cardStyle}
    >
      <RecipeCardPicture />
      <RecipeCardDescription title="Tommato Pasta">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, culpa.{" "}
      </RecipeCardDescription>
      <RecipeCardChefInfo/>
    </FlexContainer>
  );
}

export default RecipeCard;
