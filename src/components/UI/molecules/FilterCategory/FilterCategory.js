import React from "react";
import PropTypes from "prop-types";
import { H2 } from "../../../../asset/Typography";
import { ChildrenWrapper, Wrapper } from "./FilterCategory.styles";

function FilterCategory({ label, children }) {
  return (
    <Wrapper>
      <H2>{label}</H2>
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
    </Wrapper>
  );
}

FilterCategory.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterCategory;
