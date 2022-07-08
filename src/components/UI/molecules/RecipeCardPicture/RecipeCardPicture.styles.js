import { styled } from "stitches.config"

export const Wrapper = styled("div", {
    position: "relative",
    width: "100%",
    height:"100%"
})

export const HoverContainer = styled("div", {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    position: "absolute",
    top: "0",
    right: "0",
    padding: "$18",
})