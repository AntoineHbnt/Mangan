import { styled } from "stitches.config";


export const Wrapper = styled("div", {
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
  width: "100vw",
  height: "100%",
  minHeight: "100vh",
});

export const HeaderContainer = styled("div", {
  width: "100%",
  height: "100px",
  boxShadow: "0px 13px 29.12px 2.88px rgba(44, 44, 44, 0.07)",
  "@smallScreen": {
    padding: "0 $32",
  },
});

export const ContentContainer = styled("div", {
    display: "flex",
    gap: "30px",
    width: "100%",
    height: "fit-content",
    maxWidth: "1170px",
    padding: "100px 0",
    "@smallScreen": {
      padding: "$32",
    },
})
