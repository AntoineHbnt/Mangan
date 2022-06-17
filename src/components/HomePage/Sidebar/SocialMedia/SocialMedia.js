import React from "react";
import FlexContainer from "../../../../template/Container/FlexContainer";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../../UI/asset/icons/SocialMedia";
import { Span } from "../../../UI/asset/StyledTypography";

function SocialMedia() {
  return (
    <FlexContainer flexDirection="column" gap="22px">
      <Span css={{ color: "$white"}}>
        Follow our Social Media
      </Span>
      <FlexContainer gap="14px" css={{ "& > svg": { fill: "$gray" } }}>
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <YoutubeIcon />
      </FlexContainer>
    </FlexContainer>
  );
}

export default SocialMedia;
