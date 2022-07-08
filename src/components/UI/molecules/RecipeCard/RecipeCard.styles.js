import { styled } from "stitches.config";


export const Wrapper = styled("div", {
  position: "relative",
  width: "fit-content",
  "&:hover": {
    zIndex: 3,
  },
});

export const Card = styled("div", {
  flexDirection: "column",
  width: "100%",
  height: 'fit-content',
  gap: "30px",
  display: "flex",
  padding: "15px",
    cursor: "pointer",
    transition: "all .1s ease",
    borderRadius: "8px",

    "& > input": {
      display: "none",
    },

    "&:hover": {
      background: "$white",
      boxShadow: "0px 18px 42.32px 3.68px rgba(90, 90, 90, 0.3)",
      "& > input": {
        display: "block",
      },
    },
})

