import React from "react";
import FlexContainer from "../../atoms/Container/FlexContainer";
import { Logo } from "../../../../asset/logo/Logo";
import Navbar from "../../molecules/Navbar/Navbar";

function Header() {
  const headerContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    gap: "30px",
    maxWidth: "1070px",
  };

  return (
    <FlexContainer
      width="100%"
      height="100%"
      justifyContent="center"
      css={{ background: "$white" }}
    >
      <FlexContainer
        width="100%"
        height="100%"
        alignItems="center"
        css={headerContainerStyle}
      >
        <Logo />
        <Navbar />
      </FlexContainer>
    </FlexContainer>
  );
}

export default Header;
