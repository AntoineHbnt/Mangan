import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@asset/icons/SocialMedia";
import { Span } from "@asset/Typography";
import Anchor from "@atoms/Anchor/Anchor";
import { AnchorList, Wrapper } from "./SocialMedia.styles";

function SocialMedia() {
  const anchorStyle = {
    display: "flex",
    flex: 1,
    "& > svg": {
      fill: "$gray",
    },
    "&:hover > svg": {
      fill: "$white",
    },
  };

  const spanStyle = { fontSize: "$12", color: "$white" };

  return (
    <Wrapper>
      <Span css={spanStyle}>Follow our Social Media</Span>
      <AnchorList>
        <Anchor href="https://twitter.com/CelistoDev" css={anchorStyle}>
          <InstagramIcon />
        </Anchor>
        <Anchor href="https://twitter.com/CelistoDev" css={anchorStyle}>
          <TwitterIcon />
        </Anchor>
        <Anchor href="https://twitter.com/CelistoDev" css={anchorStyle}>
          <FacebookIcon />
        </Anchor>
        <Anchor href="https://twitter.com/CelistoDev" css={anchorStyle}>
          <YoutubeIcon />
        </Anchor>
      </AnchorList>
    </Wrapper>
  );
}

export default SocialMedia;
