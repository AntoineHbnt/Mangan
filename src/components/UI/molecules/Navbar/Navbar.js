import React from 'react';
import { NavItem } from '../../../../asset/Typography';
import FlexContainer from '../../atoms/Container/FlexContainer';

function Navbar() {
    return ( 
        <FlexContainer width='fit-content' gap='55px'>
            <NavItem>Home</NavItem>
            <NavItem active>Recipes</NavItem>
            <NavItem>Chefs</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>Contact</NavItem>
        </FlexContainer>
     );
}

export default Navbar;