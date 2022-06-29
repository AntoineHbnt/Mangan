import React from 'react';
import RecipesListContent from '../../components/UI/organism/RecipesListContent/RecipesListContent';
import RecipesFilter from '../../components/UI/organism/RecipesFilter/RecipesFilter';
import Footer from '../../components/UI/organism/Footer/Footer';
import GridSidebarPage from '../../template/GridSidebarPage/GridSidebarPage';

function Recipes() {
    return ( 
        <GridSidebarPage sidebar={<RecipesFilter/>} content={<RecipesListContent/>} footer={<Footer/>}/>
     );
}

export default Recipes