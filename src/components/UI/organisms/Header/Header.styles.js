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

  "@smallScreen": {
    justifyContent: "space-between",
  },
});

export const LogoContainer = styled("div", {
  display: "flex",
  cursor: "pointer",
  flex: 1,
});

export const NavbarContainer = styled("div", {
  display: "flex",
  flex: 3,
  marginLeft: "30px",

  variants: {
    open: {
      true: {
        "@smallScreen": {
          display: "flex",
        },
      },
      false: {
        "@smallScreen": {
          display: "none",
        },
      },
    }
  }
  
});

export const ButtonMenu = styled("button", {
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  cursor: "pointer",

  "& svg": {
    fill: "$gray",
  },

  "@smallScreen": {
    display: "flex",
  },
})