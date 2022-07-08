import React from 'react';
import RecipesListContent from 'components/UI/organisms/RecipesListContent/RecipesListContent';
import RecipesFilter from 'components/UI/organisms/RecipesFilter/RecipesFilter';
import Footer from 'components/UI/organisms/Footer/Footer';
import GridSidebarPage from 'templates/GridSidebarPage/GridSidebarPage';

function Recipes() {
    return ( 
        <GridSidebarPage sidebar={<RecipesFilter/>} content={<RecipesListContent/>} footer={<Footer/>}/>
     );
}

export default Recipes