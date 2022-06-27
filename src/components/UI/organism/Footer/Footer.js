import React from "react";
import { HomeLogo } from "../../../../asset/logo/Logo";
import { Copyright } from "../../../../asset/Typography";
import FlexContainer from "../../atoms/Container/FlexContainer";

function Footer() {
  const bottomStyle = {
    width: "100vw",
    height: "fit-content",
    padding: "90px",
    background: "$black",
  };

  return (
    <FlexContainer flexDirection="column">
      <FlexContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="45px"
        css={bottomStyle}
      >
        <HomeLogo />
        <Copyright>
          © Copyright 2019 Mangan Corporation. <br/> ALL RIGHTS RESERVED,
        </Copyright>
      </FlexContainer>
    </FlexContainer>
  );
}

export default Footer;
