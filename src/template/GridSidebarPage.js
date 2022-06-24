import React from "react";
import PropTypes from "prop-types";
import Container from "../components/UI/atoms/Container/Container";
import FlexContainer from "../components/UI/atoms/Container/FlexContainer";
import Header from "../components/UI/organism/Header/Header";

function GridSidebarPage({ sidebar, content }) {
  const mainContainerStyle = {
    minHeight: "100vh",
  };

  const contentContainerStyle = {
    padding: "100px 0",
  };

  const contentStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    gap: "30px",
    maxWidth: "1170px",
  };

  return (
    <FlexContainer
      flexDirection="column"
      width="100vw"
      height="100%"
      alignItems="center"
      css={mainContainerStyle}
    >
      <Container
        width="100%"
        height="100px"
        css={{ boxShadow: "0px 13px 29.12px 2.88px rgba(44, 44, 44, 0.07)" }}
      >
        <Header />
      </Container>
      <FlexContainer
        justifyContent="center"
        width="100%"
        height="100%"
        css={contentContainerStyle}
      >
        <FlexContainer width="100%" height="100%" css={contentStyle}>
          <Container width="100%" height="100%">
            {sidebar}
          </Container>
          <Container width="100%" height="100%">
            {content}
          </Container>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}

GridSidebarPage.propTypes = {
  sidebar: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

export default GridSidebarPage;
