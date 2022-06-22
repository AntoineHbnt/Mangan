import React from "react";
import AllCategoriesIcon from "../../../../asset/icons/RecipeCategories/AllCategoriesIcon";
import BeveragesIcon from "../../../../asset/icons/RecipeCategories/BeveragesIcon";
import DessertIcon from "../../../../asset/icons/RecipeCategories/DessertsIcon";
import MainDishesIcon from "../../../../asset/icons/RecipeCategories/MainDishesIcon";
import SoupsSaladsIcon from "../../../../asset/icons/RecipeCategories/SoupsSaladsIcon";
import CookingTime from "../../molecules/CookingTime/CookingTime";
import RecipeCategory from "../../atoms/RecipeCategory/RecipeCategory";
import Sidebar from "../../atoms/Sidebar/Sidebar";
import FilterCategory from "../../molecules/FilterCategory/FilterCategory";

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
    </Sidebar>
  );
}

export default RecipesFilter;
