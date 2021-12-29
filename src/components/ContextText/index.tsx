import React, { ReactNode } from "react";
import styled from "styled-components";
import { Text } from "uikit";
const ContextTextStyle = styled(Text)<{ mt?: number }>`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding-top: ${({ mt }) => mt / 3 || "0"}px;
  margin-top: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 20px;
    line-height: 28px;
    padding-top: ${({ mt }) => mt / 2 || "0"}px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    font-size: 28px;
    line-height: 34px;
    padding-top: ${({ mt }) => mt || "0"};
  }
`;

export default ContextTextStyle;
