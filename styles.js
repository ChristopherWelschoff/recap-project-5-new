import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
   

   
    margin: 0;
    font-family: system-ui;
    background-color: #1a1a1d;
    color: #e8e6e3;
  }
`;
