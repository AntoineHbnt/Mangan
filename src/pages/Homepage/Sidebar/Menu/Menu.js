import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../components/UI/atoms/Container/Container";
import FlexContainer from "../../../../components/UI/atoms/Container/FlexContainer";
import { HorizontalDashedLine } from "../../../../asset/StyledAsset";
import LinkItem from "../../../../components/UI/atoms/LinkItem/LinkItem";

function Menu() {
  return (
    <Container height="fit-content">
      <Item label="Home" path="/" active />
      <Item label="Recipes" path="/recipes"  />
      <Item label="Chefs" path="/chefs" />
      <Item label="Blog" path="/blog" />
      <Item label="Contact" path="/contact" />
    </Container>
  );
}

function Item({ label, active, path }) {
  const hoverStyle = {
    cursor: "pointer",
    "&:hover": {
      "& span": {
        color: "white",
      },
      "&: > div": {
        borderColor: active ? "$red" : "$white",
      },
    },
  };
  
  const navItemStyle = {
    transition: "all .1s ease-in",
    color: active ? "$white" : "$gray",
  };

  const dashedLineStyle = {
    borderColor: active && "$red",
  };

  return (
    <FlexContainer height="fit-content" flexDirection="column" css={hoverStyle}>
      <LinkItem label={label} path={path} css={navItemStyle}/>
      <HorizontalDashedLine css={dashedLineStyle} />
    </FlexContainer>
  );
}

Item.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  path: PropTypes.string.isRequired,
};

Item.defaultProps = {
  active: false,
};

export default Menu;
