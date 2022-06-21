import React from "react";
import Container from "../../../components/UI/atoms/Container/Container";
import FlexContainer from "../../../components/UI/atoms/Container/FlexContainer";
import { Logo } from "../../../asset/logo/Logo";
import Footer from "../Footer/Footer";
import Menu from "./Menu/Menu";

function Sidebar() {
  const containerStyle = {
    background: "$black_2",
    box: "4px 0px 24px 0px rgba(1, 1, 1, 0.2)",
    zIndex: 20,

    "@tablet": {
      display: "none",
    },
  };

  return (
    <Container width="fit-content" padding="$36" css={containerStyle}>
      <FlexContainer height="100%" flexDirection="column" css={{ gap: "$30" }}>
        <Logo css={{ transform: "scale(0.5)" }} />
        <FlexContainer
          flexDirection="column"
          justifyContent="space-between"
          css={{ flex: 1 }}
        >
          <Menu />
          <Footer />
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
}

export default Sidebar;
