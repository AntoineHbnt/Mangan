import React from "react";
import Sidebar from "../../components/HomePage/Sidebar/Sidebar";
import Container from "../../template/Container/Container";
import FlexContainer from "../../template/Container/FlexContainer";

function Homepage() {
  return (
    <Container>
      <FlexContainer>
        <Sidebar />
      </FlexContainer>
    </Container>
  );
}

export default Homepage;
