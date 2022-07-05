import React from "react";
import { HomeLogo } from "@asset/logo/Logo";
import { Copyright } from "@asset/Typography";
import Wrapper from "./Footer.styles";

function Footer() {

  return (
      <Wrapper>
        <HomeLogo />
        <Copyright>
          © Copyright 2019 Mangan Corporation. <br/> ALL RIGHTS RESERVED,
        </Copyright>
      </Wrapper>
  );
}

export default Footer;
