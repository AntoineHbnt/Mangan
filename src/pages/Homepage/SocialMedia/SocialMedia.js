import React from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "asset/icons/SocialMedia";
import { Span } from "asset/Typography";
import Anchor from "components/UI/atoms/Anchor/Anchor";
import FlexContainer from "components/UI/atoms/Container/FlexContainer";


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

  return (
    <FlexContainer width="100%" flexDirection="column" gap="22px">
      <Span css={{ fontSize: "$12", color: "$white" }}>
        Follow our Social Media
      </Span>
      <FlexContainer width="100%">
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
      </FlexContainer>
    </FlexContainer>
  );
}

export default SocialMedia;
