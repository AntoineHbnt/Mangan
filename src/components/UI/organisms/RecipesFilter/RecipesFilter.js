import React from "react";
import AllCategoriesIcon from "asset/icons/RecipeCategories/AllCategoriesIcon";
import BeveragesIcon from "asset/icons/RecipeCategories/BeveragesIcon";
import DessertIcon from "asset/icons/RecipeCategories/DessertsIcon";
import MainDishesIcon from "asset/icons/RecipeCategories/MainDishesIcon";
import SoupsSaladsIcon from "asset/icons/RecipeCategories/SoupsSaladsIcon";
import CookingTime from "components/UI/molecules/CookingTime/CookingTime";
import RecipeCategory from "components/UI/atoms/RecipeCategory/RecipeCategory";
import Sidebar from "components/UI/atoms/Sidebar/Sidebar";
import FilterCategory from "components/UI/molecules/FilterCategory/FilterCategory";
import Button from "components/UI/atoms/Button/Button";
import SelectInput from "components/UI/molecules/SelectInput/SelectInput";

function RecipesFilter() {
  return (
    <Sidebar>
      <FilterCategory label="Categories">
        <RecipeCategory
          label="All Categories"
          icon={<AllCategoriesIcon />}
          active
        />
        <RecipeCategory label="Main Dishes" icon={<MainDishesIcon />} active />
        <RecipeCategory
          label="Soups/Salads"
          icon={<SoupsSaladsIcon />}
          active
        />
        <RecipeCategory label="Beverages" icon={<BeveragesIcon />} active />
        <RecipeCategory label="Desserts" icon={<DessertIcon />} active />
      </FilterCategory>
      <FilterCategory label="Cooking Time">
        <CookingTime />
      </FilterCategory>
      <FilterCategory label="Stars">
        <SelectInput options={["5 Stars","4 Stars","3 Stars","2 Stars","1 Stars"]}/>
      </FilterCategory>

      <Button value="Refine Search" />
    </Sidebar>
  );
}

export default RecipesFilter;
