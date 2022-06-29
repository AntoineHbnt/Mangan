import { styled } from "@stitches-config";

export const Wrapper = styled("div", {
    flexDirection: "column",
    display: "flex",
    width: "100%",
})

export const Header = styled("header", {
    width: "100%",
    height: "fit-content",
    marginBottom: "50px",
})

export const Grid = styled("div",{
    display: "flex",
    rowGap: "20px",
    flexWrap: "wrap",

    width: "100%",
    height: "fit-content",

    "& > div": {
      width: `33.33%`,
      height: "550px",

      "@tablet": {
        width: `50%`,
      },
    },
})