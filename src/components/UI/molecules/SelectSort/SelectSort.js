import React from "react";
import PropTypes from "prop-types";
import { styled } from "@stitches/react";
import FlexContainer from "../../atoms/Container/FlexContainer";
import SortIcon from "../../../../asset/icons/Sort";
import { Span } from "../../../../asset/Typography";

function SelectSort({ options }) {
  const containerStyle = {
    padding: "15px 30px",
    border: "2px solid $light_gray",
    borderRadius: 999,
  };

  const Select = styled("select", {
    color: "$black",
    fontFamily: "$poppins",
    fontWeight: 600,
    border: "0px",
    outline: "0px",
  });

  return (
    <FlexContainer
      width="295px"
      height="50px"
      alignItems="center"
      justifyContent="space-between"
      css={containerStyle}
    >
      <SortIcon />
      <FlexContainer alignItems="center">
        <Span>Sort By:</Span>
        <Select>
          {options.map((elem) => (
            <option value={elem}>{elem}</option>
          ))}
        </Select>
      </FlexContainer>
    </FlexContainer>
  );
}

SelectSort.propTypes = {
  options: PropTypes.shape([]).isRequired,
};

export default SelectSort;
