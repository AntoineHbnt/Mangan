import { styled } from "stitches.config";

const Wrapper = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "@tablet": {
        flexDirection: "column",
      },
})

export default Wrapper;