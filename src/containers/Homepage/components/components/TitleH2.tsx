import React, { ReactNode } from "react";
import styled from "styled-components";
import { Heading } from "uikit";
const TitleWrapper = styled.div<{ mt: string; position: string }>`
  padding-top: ${({ mt }) => mt || "170px"};
  padding-bottom: 40px;
  text-align: ${({ position }) => position || "left"};
`;
const TitleH2Heading = styled(Heading)`
  position: relative;
  display: inline-block;
  font-weight: 600;
  font-size: 60px;
  line-height: 75px;
  strong {
    position: relative;
    z-index: 2;
  }
`;
const Bg = styled.i`
  position: absolute;
  width: 100%;
  height: 66%;
  background-color: ${({ theme }) => theme.colors.primary};

  bottom: 0;
  left: 0;
  transform: skew(-30deg, 0);
  border: 4px solid #83001b;
`;

const TitleH2 = ({
  children,
  mt,
  position,
}: {
  children: ReactNode | JSX.Element;
  mt?: string;
  position?: "right" | "left" | "center" | null | undefined;
}) => {
  return (
    <TitleWrapper mt={mt} position={position}>
      <TitleH2Heading>
        <strong>{children}</strong>
        <Bg></Bg>
      </TitleH2Heading>
    </TitleWrapper>
  );
};

export default TitleH2;
