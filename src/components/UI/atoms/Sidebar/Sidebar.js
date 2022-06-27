import React from "react";
import PropTypes from "prop-types";
import FlexContainer from "../Container/FlexContainer";

function Sidebar({ children }) {
  const containerStyle = {
    border: "1px solid $light_gray",
    borderRadius: "6px",
    padding: "50px 25px"
  };

  return (
    <FlexContainer
      flexDirection="column"
      width="100%"
      height="fit-content"
      gap="50px"
      css={containerStyle}
    >
      {children}
    </FlexContainer>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
