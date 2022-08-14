import { createGlobalStyle } from "styled-components";
import "modern-normalize";
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 30px;
    padding: 0;
    background-color: #f4f4f4;
    }

  p{
    margin: 0;
  }
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;
