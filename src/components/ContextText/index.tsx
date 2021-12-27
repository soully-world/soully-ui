import React, { ReactNode } from "react";
import styled from "styled-components";
import { Text } from "uikit";
const ContextTextStyle = styled(Text)<{ mt?: string }>`
  font-size: 28px;
  font-weight: 200;
  line-height: 34px;
  padding-top: ${({ mt }) => mt || "0"};
`;

export default ContextTextStyle;
