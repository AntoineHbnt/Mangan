import React from "react";
import PropTypes from "prop-types";
import Wrapper from "./GridWithSidebar.styles";

function GridWithSidebar({children}) {

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

GridWithSidebar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GridWithSidebar;
