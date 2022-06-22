import React from "react";
import PropTypes from "prop-types";
import { styled } from "@stitches/react";

function SelectInput({ options }) {
  const Select = styled("select", {
    width: "100%",
    height: "50px",
    padding: "10px",
    border: "2px solid $light_gray",
    borderRadius: "6px",
    color: "$gray",
    fontFamily: "$poppins",
  });

  return (
    <Select>
      {options.map((elem) => (
        <option value={elem}>{elem}</option>
      ))}
    </Select>
  );
}

SelectInput.propTypes = {
  options: PropTypes.shape([]).isRequired,
};

export default SelectInput;
