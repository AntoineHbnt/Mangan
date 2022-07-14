import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { NavItem } from "asset/Typography";
import { styled } from "stitches.config";

function LinkItem({ label, path, active, css }) {
  const Container = styled("div");

  return (
    <Link to={path}>
      <Container css={css}>
        <NavItem active={active}>{label}</NavItem>
      </Container>
    </Link>
  );
}

LinkItem.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  active: PropTypes.bool,
  css: PropTypes.shape({}),
};

LinkItem.defaultProps = {
  active: false,
  css: {},
};

export default LinkItem;
