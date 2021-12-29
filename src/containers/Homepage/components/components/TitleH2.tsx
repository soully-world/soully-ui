import React, { ReactNode } from "react";
import styled from "styled-components";
import { Heading } from "uikit";
const TitleWrapper = styled.div<{ mt: number; position: string }>`
  padding-top: ${({ mt }) => mt / 3 || 170 / 3}px;
  padding-bottom: 30px;
  text-align: ${({ position }) => position || "left"};
  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: ${({ mt }) => mt / 1.5 || 170 / 1.5}px;
    padding-bottom: 40px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding-top: ${({ mt }) => mt || "170"}px;
    padding-bottom: 40px;
  }
`;
const TitleH2Heading = styled(Heading)`
  position: relative;
  display: inline-block;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  strong {
    position: relative;
    z-index: 2;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-weight: 600;
    font-size: 45px;
    line-height: 50px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    font-weight: 600;
    font-size: 60px;
    line-height: 75px;
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
  mt?: number;
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
