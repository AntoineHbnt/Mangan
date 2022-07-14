import React from "react";
import { styled } from "stitches.config";
import PropTypes from "prop-types";
import Header from "components/UI/organisms/Header/Header";

function Page({ children }) {

  const Main = styled("main", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })

  const HeaderContainer = styled("header", {
    width: "100vw",
    height: "100px",
    boxShadow: "rgb(44 44 44 / 7%) 0px 13px 29.12px 2.88px",
  });

  const ContentContainer = styled("div", {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    height: "fit-content",
    minHeight: "calc(100vh - 100px)",
    padding: "100px $32",
  });

  return (
    <Main>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ContentContainer>{children}</ContentContainer>
    </Main>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
