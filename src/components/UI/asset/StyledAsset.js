import { styled } from "../../../Themes";

export const VerticalLine = styled("div", {
  height: "100%",
  borderBottom: "solid 1px $gray",
});

export const VerticalDashedLine = styled("div", {
  height: "100%",
  borderBottom: "dashed 1px $gray",
});

export const HorizontalLine = styled("div", {
  width: "100%",
  borderBottom: "solid 1px $gray",
});

export const HorizontalDashedLine = styled("div", {
  width: "100%",
  borderBottom: "dashed 1px $gray",
});
