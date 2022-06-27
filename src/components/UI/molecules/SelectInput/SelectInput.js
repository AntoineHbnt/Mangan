import React from "react";
import { nanoid } from "nanoid";
import PropTypes, { string } from "prop-types";
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
        <option key={nanoid()} value={elem}>
          {elem}
        </option>
      ))}
    </Select>
  );
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(string).isRequired,
};

export default SelectInput;
