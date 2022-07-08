import React from 'react';
import PropTypes from 'prop-types';
import { Span } from 'asset/Typography';
import { ChefInfo, Img, ProfilPicture, Wrapper } from './RecipeCardChefInfo.styles';

function RecipeCardChefInfo({name, rank, src}) {

    const nameStyle = {fontWeight: 600, color: "$black"}


    return ( 
        <Wrapper>
            <ProfilPicture>
                {src && <Img src={src} alt="profile" />}
            </ProfilPicture>
            <ChefInfo>
                <Span css={nameStyle}>{name}</Span>
                <Span>{rank}</Span>
            </ChefInfo>
        </Wrapper>
     );
}

RecipeCardChefInfo.propTypes = {
    name: PropTypes.string,
    rank: PropTypes.string,
    src: PropTypes.string,
}

RecipeCardChefInfo.defaultProps = {
    name: "Lorem Ipsum",
    rank: "Star Chef",    
    src: "https://yt3.ggpht.com/ytc/AKedOLR3uFUrGV1oZ3mQ0eWly_0IKLT8fCQCbRGPsw2YmQ=s900-c-k-c0x00ffffff-no-rj"
}

export default RecipeCardChefInfo;