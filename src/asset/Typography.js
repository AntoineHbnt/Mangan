import { styled } from "stitches.config";


export const H1 = styled("h1", {
  fontSize: "$36",
  fontWeight: "$700",
  fontFamily: "$libreBaskerville",
  lineHeight: "$45",
  color: "$black",
});

export const H2 = styled("h2", {
  fontSize: "$20",
  fontWeight: "$700",
  fontFamily: "$libreBaskerville",
  color: "$black",
});

export const H3 = styled("h3", {
  fontSize: "$18",
  fontWeight: "$700",
  fontFamily: "$libreBaskerville",
  color: "$black",
});

export const Span = styled("span", {
  fontSize: "$16",
  fontWeight: "$400",
  fontFamily: "$poppins",
  lineHeight: "$24",
  color: "$gray",
});

export const Copyright = styled("span", {
  fontSize: "$12",
  fontWeight: "$400",
  fontFamily: "$poppins",
  lineHeight: "$20",
  color: "$gray",
});

export const NavItem = styled("span", {
  fontSize: "$18",
  fontWeight: "400",
  fontFamily: "$poppins",
  lineHeight: "58px",
  color: "$black",

  variants: {
    active: {
      true: {
        fontWeight: 600,
        color: "$red",
      },
    },
  },
});

export const Filter = styled("span", {
  fontSize: "$18",
  fontWeight: "400",
  fontFamily: "$poppins",
  lineHeight: "58px",
  color: "$gray",
});

export const Pseudo = styled("span", {
  fontSize: "$20",
  fontWeight: "$400",
  fontFamily: "$poppins",
  color: "$black",
});
