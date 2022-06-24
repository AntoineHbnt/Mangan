import React from "react";
import { styled } from "@stitches/react";
import Button from "../../atoms/Button/Button";
import FlexContainer from "../../atoms/Container/FlexContainer";
import RecipeCardChefInfo from "../RecipeCardChefInfo/RecipeCardChefInfo";
import RecipeCardDescription from "../RecipeCardDescription/RecipeCardDescription";
import RecipeCardPicture from "../RecipeCardPicture/RecipeCardPicture";

function RecipeCard() {
  const CardContainer = styled("div", {
    position: "relative",
    width: "fit-content",
    "&:hover": {
      zIndex: 3,
    },
  });

  const cardStyle = {
    padding: "15px",
    cursor: "pointer",
    transition: "all .1s ease",
    borderRadius: "8px",

    "& > input": {
      display: "none",
    },

    "&:hover": {
      background: "$white",
      boxShadow: "0px 18px 42.32px 3.68px rgba(90, 90, 90, 0.3)",
      "& > input": {
        display: "block",
      },
    },
  };

  return (
    <CardContainer>
      <FlexContainer
        flexDirection="column"
        width="100%"
        height="fit-content"
        gap="30px"
        css={cardStyle}
      >
        <RecipeCardPicture src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <RecipeCardDescription title="Tommato Pasta">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, culpa.{" "}
        </RecipeCardDescription>
        <RecipeCardChefInfo />
        <Button value="View Recipe" />
      </FlexContainer>
    </CardContainer>
  );
}

export default RecipeCard;
