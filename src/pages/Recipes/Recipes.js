import React from 'react';
import RecipesListContent from '../../components/UI/organism/RecipesListContent/RecipesListContent';
import RecipesFilter from '../../components/UI/organism/RecipesFilter/RecipesFilter';
import GridSidebarPage from '../../template/GridSidebarPage';

function Recipes() {
    return ( 
        <GridSidebarPage sidebar={<RecipesFilter/>} content={<RecipesListContent/>}/>
     );
}

export default Recipes