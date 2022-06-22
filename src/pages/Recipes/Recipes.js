import React from 'react';
import RecipesFilter from '../../components/UI/organism/RecipesFilter/RecipesFilter';
import GridSidebarPage from '../../template/GridSidebarPage';

function Recipes() {
    return ( 
        <GridSidebarPage sidebar={<RecipesFilter/>} content={<div>content</div>}/>
     );
}

export default Recipes