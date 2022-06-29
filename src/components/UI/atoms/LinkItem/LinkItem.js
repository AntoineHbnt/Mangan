import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavItem } from '@asset/Typography';

function LinkItem({label, path, active, css}) {
    return ( 
        <Link to={path}>
            <NavItem active={active} css={css}>
                {label}
            </NavItem>
        </Link>
    );
}

LinkItem.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    active: PropTypes.bool,
    css: PropTypes.shape({}),
}

LinkItem.defaultProps = {
    active: false,
    css: {},
}

export default LinkItem;