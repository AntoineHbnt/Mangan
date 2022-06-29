import React from "react";
import PropTypes from "prop-types";
import Container from "../components/UI/atoms/Container/Container";
import FlexContainer from "../components/UI/atoms/Container/FlexContainer";
import Header from "../components/UI/organism/Header/Header";
import Button from "../components/UI/atoms/Button/Button";

function GridSidebarPage({ sidebar, content, footer }) {
  const [showFilter, setShowFilter] = React.useState(false);

  React.useEffect(() => {
    console.log(showFilter);
  }, [showFilter]);

  const mainContainerStyle = {
    minHeight: "100vh",
  };

  const headerStyle = {
    boxShadow: "0px 13px 29.12px 2.88px rgba(44, 44, 44, 0.07)",
    "@smallScreen": {
      padding: "0 $32",
    },
  };

  const contentStyle = {
    display: "flex",
    padding: "100px 0",
    gap: "30px",
    maxWidth: "1170px",
    "@smallScreen": {
      padding: "$32",
    },
  };

  const sidebarStyle = {
    flex: 1,
    zIndex: 10,
    background: "#fff",
    "@smallScreen": {
      display: "none",
    },
  };

  const smallScreenSidebarStyle = {
    zIndex: 10,
    display: "none",
    "@smallScreen": {
      display: "flex",
      padding: "$32",
      position: "fixed",
      left: 0,
    },
  };

  const filterButtonStyle = {
    background: "$white",
    position: "fixed",
    bottom: 0,
    left: 0,
    margin: "auto",
    zIndex: 10,
    display: "none",
    boxShadow: "rgb(44 44 44 / 7%) 0px -13px 29.12px 2.88px",
    "@smallScreen": {
      display: "flex",
    },
  };

  const buttonStyle = {
    background: "$white",
    color: "$black",
    borderRadius: 0,
    fontWeight: 700,
    "&:hover": {
      background: "$light_gray",
    },
  };

  return (
    <FlexContainer
      flexDirection="column"
      width="100vw"
      height="100%"
      alignItems="center"
      css={mainContainerStyle}
    >
      <Container width="100%" height="100px" css={headerStyle}>
        <Header />
      </Container>

      <FlexContainer width="100%" height="fit-content" css={contentStyle}>
        <Container width="100%" height="100%" css={smallScreenSidebarStyle}>
          <FlexContainer
            width="100%"
            height="50px"
            justifyContent="center"
            alignItems="center"
            css={filterButtonStyle}
          >
            <Button
              value="FILTER"
              css={buttonStyle}
              onClick={() => setShowFilter(!showFilter)}
            />
          </FlexContainer>
          {showFilter && (
            <FlexContainer
              width="100vw"
              height="100vh"
              alignItems="center"
              justifyContent="center"
              css={{
                position: "fixed",
                top: 0,
                left: 0,
                padding: "$32",
                background: "rgba(255, 255, 255, 0.99)",
              }}
            >
              {sidebar}
            </FlexContainer>
          )}
        </Container>
        <Container width="100%" height="100%" css={sidebarStyle}>
          {sidebar}
        </Container>
        <Container width="100%" height="100%" css={{ flex: 3 }}>
          {content}
        </Container>
      </FlexContainer>
      {footer}
    </FlexContainer>
  );
}

GridSidebarPage.propTypes = {
  sidebar: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default GridSidebarPage;
