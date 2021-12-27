import { createGlobalStyle } from "styled-components";
import { PancakeTheme } from "uikit";
declare module "styled-components" {
  export interface DefaultTheme extends PancakeTheme {}
}
const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;500;600;700&display=swap');
*{
  font-family: "Readex Pro", sans-serif;
}
body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
}
ul, li{
  list-style: none;
}

::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
&::-webkit-scrollbar {
  display: none;
}
`;
export default GlobalStyle;
