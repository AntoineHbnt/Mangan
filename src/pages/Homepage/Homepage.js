import React from "react";
import Header from "../../components/HomePage/Header/Header";
import PictureGrid from "../../components/HomePage/PictureGrid/PictureGrid";
import Sidebar from "../../components/HomePage/Sidebar/Sidebar";
import FlexContainer from "../../template/Container/FlexContainer";

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
