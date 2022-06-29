import React from "react";
import { styled } from "@stitches-config";
import PropTypes from "prop-types";
import { Filter } from "@asset/Typography";

function RecipeCategory({ icon, label }) {
  const Wrapper = styled("div", {
    display: "flex",
    width: "100%",
    alignItems: "center",
    borderBottom: "1px solid $light_gray",
    borderBottomStyle: "dashed",
    cursor: "pointer",

    "&:hover": {
      "& svg": {
        fill: "$red",
      },
      "& span": {
        color: "$red",
      },
    },
  });

  const Icon = styled("div", {
    display: "flex",
    flex: 1,
  });

  const Label = styled("div", {
    display: "flex",
    flex: 3,
  });

  return (
    <Wrapper>
      {icon && <Icon>{icon}</Icon>}
      <Label>
        <Filter>{label}</Filter>
      </Label>
    </Wrapper>
  );
}

RecipeCategory.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
};

RecipeCategory.defaultProps = {
  icon: null,
};

export default RecipeCategory;
