import { styled } from "@stitches-config";
import React from "react";
import PropTypes from "prop-types";

function Picture({src, css}) {

  const Img = styled("img", {
    width: "100%",
    height: "100%"
  })

  return <Img  src={src} css={css}/>;
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  css: PropTypes.shape({}),
}

Picture.defaultProps = {
  css: {},
}



export default Picture;
