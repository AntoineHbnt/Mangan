import { styled } from "stitches.config";

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
    columnGap: "20px",
    flexWrap: "wrap",

    width: "100%",
    height: "fit-content",

    "& > div": {
      width: "calc((100% - 40px)/3)",

      "@tablet": {
        width: `calc((100% - 20px)/2)`,
      },
    },
})