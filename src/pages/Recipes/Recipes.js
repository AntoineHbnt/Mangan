import React from 'react';
import ListContent from '../../components/UI/organism/ListContent/ListContent';
import RecipesFilter from '../../components/UI/organism/RecipesFilter/RecipesFilter';
import GridSidebarPage from '../../template/GridSidebarPage';

function Recipes() {
    return ( 
        <GridSidebarPage sidebar={<RecipesFilter/>} content={<ListContent/>}/>
     );
}

export default Recipes