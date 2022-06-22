import React from 'react';
import { Span } from '../../../../asset/Typography';
import Container from '../../atoms/Container/Container';
import FlexContainer from '../../atoms/Container/FlexContainer';

function RecipeCardChefInfo() {

    const infoStyle = {
        padding: "15px",
        borderTop: "2px solid $light_gray",
        borderBottom: "2px solid $light_gray",

    }

    return ( 
        <FlexContainer width='100%' alignItems='center' gap='15px' css={infoStyle}>
            <Container width='40px' height='40px' css={{borderRadius: 999,background: '$black'}}/>
            <FlexContainer flexDirection='column'>
                <Span css={{fontWeight: 600, color: "$black"}}>Lorem Ipsum</Span>
                <Span>Star Chef</Span>
            </FlexContainer>
        </FlexContainer>
     );
}

export default RecipeCardChefInfo;