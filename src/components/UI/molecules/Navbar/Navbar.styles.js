import { styled } from "stitches.config";

const Wrapper = styled("div", {
  display: "flex",
  width: "fit-content",
  gap: "55px",

  "@smallScreen": {
    position: "absolute",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "fit-content",
    gap: "0",
    top: "100px",
    left: "0",
    backgroundColor: "$white",
    boxShadow: "0px 42px 42px 0px rgba(0,0,0, 0.2)",
    zIndex: "20",
  },

  "@mobile": {
    flexDirection: "column",
    position: "absolute",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "fit-content",
    gap: "0",
    top: "100px",
    left: "0",
    backgroundColor: "$white",
    boxShadow: "0px 42px 42px 0px rgba(0,0,0, 0.2)",
    zIndex: "20",
  }
});

export default Wrapper;
