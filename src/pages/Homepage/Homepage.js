import React from "react";
import FlexContainer from "components/UI/atoms/Container/FlexContainer";
import Header from "./Header/Header";
import PictureGrid from "./PictureGrid/PictureGrid";
import Sidebar from "./Sidebar/Sidebar";

function Homepage() {
  return (
    <FlexContainer width="100%" height="100%" css={{ overflow: "hidden" }}>
      <Header />
      <Sidebar />
      <PictureGrid />
    </FlexContainer>
  );
}

export default Homepage;
