import React from 'react';
import RecipesListContent from '@organisms/RecipesListContent/RecipesListContent';
import RecipesFilter from '@organisms/RecipesFilter/RecipesFilter';
import Footer from '@organisms/Footer/Footer';
import GridSidebarPage from '@templates/GridSidebarPage/GridSidebarPage';

function Recipes() {
    return ( 
        <GridSidebarPage sidebar={<RecipesFilter/>} content={<RecipesListContent/>} footer={<Footer/>}/>
     );
}

export default Recipes