import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *, html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Barlow Semi Condensed', sans-serif;
    color: white;

    h1{
      font-size: 42px;
      letter-spacing: .09em;
    }

    @media (max-width: 688px) {
      h1{
      font-size: 22px;
      letter-spacing: .09em;
    } 
    }
  }
`;
