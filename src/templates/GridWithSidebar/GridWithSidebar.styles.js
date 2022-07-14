import { styled } from "stitches.config";

const Wrapper = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: "$content-max",
  gap: "$32",

  "& > :nth-child(1)": {
    flex: 1,
  },

  "& > :nth-child(2)": {
    flex: 3,
  },
});

export default Wrapper;
