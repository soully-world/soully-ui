import React, { ReactNode } from "react";
import styled from "styled-components";
import { Text } from "uikit";
const ContextTextStyle = styled(Text)<{ mt?: string }>`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding-top: ${({ mt }) => mt || "0"};
  ${({ theme }) => theme.mediaQueries.xxl} {
    font-weight: 200;
    font-size: 28px;
    line-height: 34px;
    padding: 0;
  }
`;

export default ContextTextStyle;
