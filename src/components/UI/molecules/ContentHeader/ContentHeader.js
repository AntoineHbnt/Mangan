import React from "react";
import PropTypes from "prop-types";
import { H1 } from "asset/Typography";
import SelectSort from "components/UI/molecules/SelectSort/SelectSort";
import Wrapper from "./ContentHeader.styles";

function ContentHeader({ label }) {
  const titleStyle = {
    display: "inline-block",
    lineHeight: "1.2",
    width: "55%",

    "@tablet": {
      width: "100%",
      marginBottom: "$32",
    }
  };

  return (
    <Wrapper>
      <H1 css={titleStyle}>{label}</H1>
      <SelectSort options={["Date Added"]} />
    </Wrapper>
  );
}

ContentHeader.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ContentHeader;
