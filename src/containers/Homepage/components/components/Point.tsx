import React from "react";
import styled from "styled-components";
const Point = styled.i`
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 2%;
  background-color: ${({ theme }) => `${theme.colors.text}`};
`;
export default Point;
