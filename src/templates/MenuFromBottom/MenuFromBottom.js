import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Content } from "./MenuFromBottom.styles";

function MenuFromBottom({ label, content }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {`${isOpen ? "HIDE" : "SHOW"}  ${label}`}
      </Button>
      {isOpen && <Content>{content}</Content>}
    </Container>
  );
}

MenuFromBottom.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default MenuFromBottom;
