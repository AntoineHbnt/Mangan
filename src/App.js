import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./components/UI/atoms/Container/Container";
import Homepage from "./pages/Homepage/Homepage";
import Recipes from "./pages/Recipes/Recipes";

function App() {
  return (
    <Container width="100vw" height="100vh">
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="recipes" element={<Recipes />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
