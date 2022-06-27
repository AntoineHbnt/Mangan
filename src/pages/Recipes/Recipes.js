import React from 'react';
import RecipesListContent from '../../components/UI/organism/RecipesListContent/RecipesListContent';
import RecipesFilter from '../../components/UI/organism/RecipesFilter/RecipesFilter';
import GridSidebarPage from '../../template/GridSidebarPage';
import Footer from '../../components/UI/organism/Footer/Footer';

function Recipes() {
    return ( 
        <GridSidebarPage sidebar={<RecipesFilter/>} content={<RecipesListContent/>} footer={<Footer/>}/>
     );
}

export default Recipes