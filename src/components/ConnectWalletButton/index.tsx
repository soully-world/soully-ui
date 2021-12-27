import React from "react";
import { Button, useWalletModal } from "uikit";
import useAuth from "hooks/useAuth";
import { useTranslation } from "contexts/Localization";

const ConnectWalletButton = (props) => {
  const { t } = useTranslation();
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logout, t);
  return (
    <Button variant="secondary" onClick={onPresentConnectModal} {...props}>
      {t("Connect Wallet")}
    </Button>
  );
};
export default ConnectWalletButton;
