import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background: #F2F2F2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(---background);
    font-family: 'Nutito', sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
