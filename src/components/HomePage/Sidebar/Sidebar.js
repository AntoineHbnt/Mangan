import React from "react";
import Container from "../../../template/Container/Container";
import FlexContainer from "../../../template/Container/FlexContainer";
import Logo from "../../UI/asset/logo/Logo";
import Footer from "./Footer/Footer";
import Menu from "./Menu/Menu";

function Sidebar() {
  return (
    <Container
      width="fit-content"
      padding="$36"
      css={{
        background: "$black_2",
        boxShadow: "4px 0px 24px 0px rgba(1, 1, 1, 0.2)",
      }}
    >
      <FlexContainer height="100%" flexDirection="column" css={{ gap: "$30" }}>
        <Logo />
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
