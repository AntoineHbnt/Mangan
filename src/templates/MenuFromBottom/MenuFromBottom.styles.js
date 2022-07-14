import { keyframes } from "@stitches/react";
import { styled } from "stitches.config";

const showContent = keyframes({
  "0%": {
    transform: "translateY(200vw)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});

export const Container = styled("div", {
  display: "none",
  position: "absolute",
  width: "100vw",
  zIndex: "30",

  "@smallScreen": {
    display: "flex",
  }
});

export const Content = styled("div", {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  gap: "$32",
  top: 0,
  left: 0,
  width: "100vw",
  height: "calc(fit-content + 60px)",
  minHeight: "100vh",
  maxHeight: "calc(100vh - 50px)",
  overflowY: "scroll",
  padding: "$32",
  backgroundColor: "$white",
  animation: `${showContent} 0.5s ease-in-out`,
});

export const Button = styled("button", {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "50px",
  zIndex: 40,
  backgroundColor: "$white",
  fontFamily: "$poppins",
  fontWeight: "700",
  color: "$black",
  boxShadow: "rgb(44 44 44 / 7%) 0px -15px 30px 3px",
});
