import { styled } from "stitches.config";

export const Wrapper = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  padding: "15px",
  borderTop: "2px solid $light_gray",
  borderBottom: "2px solid $light_gray",

  "@mobile":{
    padding: "10px",
    "& span":{
        fontSize: "12px",
    }
  }
});

export const ProfilPicture =styled("div",{
    width: "40px",
    height: "40px",
    borderRadius: 999,
    background: "$black",
    overflow: "hidden",
})

export const Img = styled("img", {
    height: "100%",
    objectFit: "cover"
})

export const ChefInfo = styled("div", {
    flexDirection: "column",
    display: "flex",
    marginLeft: "10px",
})