import React from "react";
import Container from "./components/UI/atoms/Container/Container";
import Recipes from "./pages/Recipes/Recipes";

function App() {
  return (
    <Container width="100vw" height="100vh">
      <Recipes/>
    </Container>
  );
}

export default App;
