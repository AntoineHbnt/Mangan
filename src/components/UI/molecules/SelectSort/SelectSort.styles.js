import { styled } from "@stitches-config";

export const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "295px",
  height: "50px",
  padding: "15px 30px",
  border: "2px solid $light_gray",
  borderRadius: 999,
});

export const SelectContent = styled("div", {
    display: "flex",
    alignItems: "center",
})

export const Select = styled("select", {
  color: "$black",
  fontFamily: "$poppins",
  fontWeight: 600,
  border: "0px",
  outline: "0px",
});
