import React from 'react';
import PropTypes from 'prop-types';
import Svg from '.';

function HeartIcon({css}) {
    return ( 
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.14 18" css={css}>
            <path d="M18.41,1.73a5.9,5.9,0,0,1,0,8.34l-8.34,8.34L1.73,10.07a5.9,5.9,0,1,1,8.34-8.34A5.88,5.88,0,0,1,18.41,1.73Z"/>
        </Svg>
     );
}

HeartIcon.propTypes = {
    css: PropTypes.shape({}),
}

HeartIcon.defaultProps = {
    css: {},
}

export default HeartIcon;