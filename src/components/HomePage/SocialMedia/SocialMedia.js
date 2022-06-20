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
    "& > svg": {
      fill: "$gray",
    },
    "&:hover > svg": {
      fill: "$white",
    },
  };

  return (
    <FlexContainer flexDirection="column" gap="22px">
      <Span css={{ color: "$white" }}>Follow our Social Media</Span>
      <FlexContainer gap="14px">
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
