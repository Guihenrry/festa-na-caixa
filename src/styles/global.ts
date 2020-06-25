import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background: #F2F2F2;
    --white: #FFFFFF;
    --purple: #4B4684;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    font-family: 'Nunito', sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
