import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../components/UI/atoms/Container/Container";
import FlexContainer from "../../../../components/UI/atoms/Container/FlexContainer";
import { HorizontalDashedLine } from "../../../../asset/StyledAsset";
import { NavItem } from "../../../../asset/Typography";

function Menu() {
  return (
    <Container height="fit-content">
      <Item label="Home" isActive />
      <Item label="Recipes" />
      <Item label="Chef" />
      <Item label="Blog" />
      <Item label="Contact" />
    </Container>
  );
}

function Item({ label, isActive }) {
  const hoverStyle = {
    cursor: "pointer",
    "&:hover": {
      "& > span": {
        color: "white",
      },
      "&: > div": {
        borderColor: isActive ? "$red" : "$white",
      },
    },
  };
  
  const navItemStyle = {
    transition: "all .1s ease-in",
    color: isActive ? "$white" : "$gray",
  };

  const dashedLineStyle = {
    borderColor: isActive && "$red",
  };

  return (
    <FlexContainer height="fit-content" flexDirection="column" css={hoverStyle}>
      <NavItem css={navItemStyle}>{label}</NavItem>
      <HorizontalDashedLine css={dashedLineStyle} />
    </FlexContainer>
  );
}

Item.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
};

Item.defaultProps = {
  label: "",
  isActive: false,
};

export default Menu;
