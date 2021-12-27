import React from "react";
import { ModalProvider } from "uikit";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import { ToastsProvider } from "contexts/ToastsContext";

import { getLibrary } from "utils/web3React";
import store from "stores";
import { LanguageProvider } from "contexts/Localization";

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ToastsProvider>
          <LanguageProvider>
            <ModalProvider>{children}</ModalProvider>
          </LanguageProvider>
        </ToastsProvider>
      </Provider>
    </Web3ReactProvider>
  );
};

export default Providers;
