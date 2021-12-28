import React from "react";
import { Button, useWalletModal, useMatchBreakpoints } from "uikit";
import useAuth from "hooks/useAuth";
import { useTranslation } from "contexts/Localization";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  ${({ theme }) => theme.mediaQueries.xs} {
    height: 34px;
    line-height: 34px;
  }
`;
const ConnectWalletButton = (props) => {
  const { t } = useTranslation();
  const { login, logout } = useAuth();
  const { isXs, isSm } = useMatchBreakpoints();
  const { onPresentConnectModal } = useWalletModal(login, logout, t);
  return (
    <ButtonStyled variant="secondary" onClick={onPresentConnectModal} {...props}>
      {isXs || isSm ? "Connect" : "Connect Wallet"}
    </ButtonStyled>
  );
};
export default ConnectWalletButton;
