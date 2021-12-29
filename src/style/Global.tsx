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
img{
  display: block;
  width: 100%;
}
ul, li{
  list-style: none;
}
/* 动画 */
@-webkit-keyframes process {
    0% { background-position: 0 0; }
    100% { background-position: 20px 0; }
}
@keyframes process {
    0% { background-position: 0 0; }
    100% { background-position: 20px 0; }
}
i, em{
  font-style: normal;
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
