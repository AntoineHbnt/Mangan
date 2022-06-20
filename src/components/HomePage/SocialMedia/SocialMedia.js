import React from "react";
import FlexContainer from "../../../template/Container/FlexContainer";
import Anchor from "../../UI/Anchor/Anchor";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../UI/asset/icons/SocialMedia";
import { Span } from "../../UI/asset/StyledTypography";

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
