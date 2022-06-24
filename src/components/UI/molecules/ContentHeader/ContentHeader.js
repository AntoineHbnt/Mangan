import React from "react";
import PropTypes from "prop-types";
import { H1 } from "../../../../asset/Typography";
import FlexContainer from "../../atoms/Container/FlexContainer";
import SelectSort from "../SelectSort/SelectSort";

function ContentHeader({ label }) {
  const titleStyle = {
    display: "inline-block",
    lineHeight: "1.2",
    width: '55%'
  };

  return (
    <FlexContainer width="100%" justifyContent="space-between" alignItems="center">
        <H1 css={titleStyle}>{label}</H1>
        <SelectSort options={["Date Added"]} />
    </FlexContainer>
  );
}

ContentHeader.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ContentHeader;
