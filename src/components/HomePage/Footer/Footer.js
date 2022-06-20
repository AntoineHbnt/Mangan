import React from "react";
import FlexContainer from "../../../template/Container/FlexContainer";
import { HorizontalDashedLine } from "../../UI/asset/StyledAsset";
import { Copyright } from "../../UI/asset/StyledTypography";
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
