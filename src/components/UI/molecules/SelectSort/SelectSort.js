import React from "react";
import PropTypes, { string } from "prop-types";
import { nanoid } from "nanoid";
import SortIcon from "../../../../asset/icons/Sort";
import { Span } from "../../../../asset/Typography";
import { Select, SelectContent, Wrapper } from "./SelectSort.styles";

function SelectSort({ options }) {
  return (
    <Wrapper>
      <SortIcon />
      <SelectContent>
        <Span>Sort By:</Span>
        <Select>
          {options.map((elem) => (
            <option key={nanoid()} value={elem}>
              {elem}
            </option>
          ))}
        </Select>
      </SelectContent>
    </Wrapper>
  );
}

SelectSort.propTypes = {
  options: PropTypes.arrayOf(string).isRequired,
};

export default SelectSort;
