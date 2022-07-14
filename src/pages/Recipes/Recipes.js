import React from "react";
import RecipesFilter from "components/UI/organisms/RecipesFilter/RecipesFilter";
import RecipesListContent from "components/UI/organisms/RecipesListContent/RecipesListContent";
import Page from "pages";
import { styled } from "stitches.config";
import GridWithSidebar from "templates/GridWithSidebar/GridWithSidebar";
import Sidebar from "components/UI/atoms/Sidebar/Sidebar";
import MenuFromBottom from "templates/MenuFromBottom/MenuFromBottom";

function Recipes() {
  const FilterContainer = styled("div", {
    width: "100%",
    height: "fit-content",

    "@smallScreen": {
      display: "none",
    },
  });

  const ContentContainer = styled("div", {
    width: "100%",
    height: "fit-content",
  });

  return (
    <Page>
      <GridWithSidebar>
        <FilterContainer>
          <Sidebar>
            <RecipesFilter />
          </Sidebar>
        </FilterContainer>
        <ContentContainer>
          <RecipesListContent />
        </ContentContainer>
      </GridWithSidebar>
      <MenuFromBottom label="FILTER" content={<RecipesFilter />} />
    </Page>
  );
}

export default Recipes;
