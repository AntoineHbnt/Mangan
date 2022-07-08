import { styled } from "stitches.config";

export const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "50px",
  margin: "auto",
  minHeight: "100px",
  maxWidth: "1170px",
  zIndex: 20,
});

export const LogoContainer = styled("div", {
  display: "flex",
  flex: 1,
});

export const NavbarContainer = styled("div", {
  display: "flex",
  flex: 3,
  marginLeft: "30px"
});
