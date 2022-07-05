import React from "react";
import FlexContainer from "@atoms/Container/FlexContainer";
import { HorizontalDashedLine } from "@asset/StyledAsset";
import { Copyright } from "@asset/Typography";
import SocialMedia from "../SocialMedia/SocialMedia";

function Footer() {
  return (
    <FlexContainer height="auto" flexDirection="column" gap="30px">
      <SocialMedia />
      <HorizontalDashedLine />
      <Copyright>
        Copyright © 2019 Mangan LTD. <br /> All Rights Reserved.
      </Copyright>
    </FlexContainer>
  );
}

export default Footer;
