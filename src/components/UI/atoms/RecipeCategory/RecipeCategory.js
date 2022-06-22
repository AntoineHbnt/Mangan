import React from "react";
import PropTypes from "prop-types";
import FlexContainer from "../Container/FlexContainer";
import { Filter } from "../../../../asset/Typography";

function RecipeCategory({ icon, label }) {
  const containerStyle = {
    borderBottom: "1px solid $light_gray",
    borderBottomStyle: "dashed",
  };

  return (
    <FlexContainer
      width="100%"
      alignItems="center"
      css={containerStyle}
    >
      <FlexContainer css={{ flex: 1 }}>{icon}</FlexContainer>
      <FlexContainer css={{ flex: 3 }}>
        <Filter>{label}</Filter>
      </FlexContainer>
    </FlexContainer>
  );
}

RecipeCategory.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default RecipeCategory;
