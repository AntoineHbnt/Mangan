import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../template/Container/Container";
import FlexContainer from "../../../../template/Container/FlexContainer";
import { HorizontalDashedLine } from "../../../UI/asset/StyledAsset";
import { NavItem } from "../../../UI/asset/StyledTypography";

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

  return (
    <FlexContainer height="fit-content" flexDirection="column">
      <NavItem css={{ color: isActive ? "$white" : "$gray" }}>{label}</NavItem>
      <HorizontalDashedLine css={isActive && {borderColor: "$red"}}/>
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
