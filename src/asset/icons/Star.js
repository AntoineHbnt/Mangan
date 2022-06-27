import React from "react";
import PropTypes from "prop-types";
import Svg from ".";

function StarIcon({ css }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.31 82.85" css={css}>
      <path d="M60,25.51l23.14,3.74a3.83,3.83,0,0,1,2,6.56l-17,16.09a3.84,3.84,0,0,0-1.15,3.37L70.5,78.43a3.83,3.83,0,0,1-5.62,3.94L44.32,71.14a3.8,3.8,0,0,0-3.56-.06L19.84,81.65a3.83,3.83,0,0,1-5.49-4.12l4.33-23a3.86,3.86,0,0,0-1-3.41L1.12,34.47A3.83,3.83,0,0,1,3.34,28l23.25-3a3.8,3.8,0,0,0,2.91-2L40.21,2.08a3.82,3.82,0,0,1,6.86.11l10,21.18A3.8,3.8,0,0,0,60,25.51Z" />
    </Svg>
  );
}

StarIcon.propTypes = {
  css: PropTypes.shape({}),
};
StarIcon.defaultProps = {
  css: {},
};

export default StarIcon;
