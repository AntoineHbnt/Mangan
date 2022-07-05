import React from "react";
import { nanoid } from "nanoid";
import PropTypes, { string } from "prop-types";
import Select from "./SelectInput.styles";

function SelectInput({ options }) {
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
