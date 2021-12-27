import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { dark } from "uikit";

import App from "./App";
import { PageLoading } from "components/PageLoading";
import reportWebVitals from "./reportWebVitals";
import Providers from "./Providers";
import { ThemeProvider } from "styled-components";
import { ToastListener } from "./contexts/ToastsContext";
// css
import { ResetCSS } from "uikit";
import GlobalStyle from "style/Global";
const ThemeProviderWrapper = (props) => {
  return <ThemeProvider theme={dark} {...props} />;
};

const listen = () => {
  if (document.readyState === "complete") {
    ReactDOM.render(
      <React.StrictMode>
        <ThemeProviderWrapper>
          <Providers>
            <BrowserRouter>
              <ResetCSS />
              <GlobalStyle />
              <App />
              <ToastListener />
            </BrowserRouter>
          </Providers>
        </ThemeProviderWrapper>
      </React.StrictMode>,
      document.getElementById("root"),
    );
  } else {
    // assert is loading
    ReactDOM.render(
      <React.StrictMode>
        <ThemeProviderWrapper>
          <ResetCSS />
          <GlobalStyle />
          <PageLoading />
        </ThemeProviderWrapper>
      </React.StrictMode>,
      document.getElementById("root"),
    );
  }
};
document.onreadystatechange = listen;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
