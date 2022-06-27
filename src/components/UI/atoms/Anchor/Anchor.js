import React from "react";
import PropTypes from "prop-types";
import { styled } from "../../../../Themes";

function Anchor({ href, css, children }) {
  const StyledAnchor = styled("a", {
    width: "fit-content",
    height: "fit-content",
  });

  return (
    <StyledAnchor href={href} css={css}>
      {children}
    </StyledAnchor>
  );
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  css: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
};

Anchor.defaultProps = {
  css: {},
};

export default Anchor;
