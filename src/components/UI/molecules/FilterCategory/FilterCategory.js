import React from "react";
import PropTypes from "prop-types";
import FlexContainer from "../../atoms/Container/FlexContainer";
import { H2 } from "../../../../asset/Typography";

function FilterCategory({ label, children }) {
  return (
    <FlexContainer flexDirection="column" width="100%" gap="12px">
      <H2>{label}</H2>
      <FlexContainer flexDirection="column" width="100%">
        {children}
      </FlexContainer>
    </FlexContainer>
  );
}

FilterCategory.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterCategory;
