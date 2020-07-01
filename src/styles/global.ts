import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background: #F2F2F2;
    --white: #FFFFFF;
    --purple: #4B4684;
    --orange: #FF5F56;
    --gray-1: #333333;
    --gray-2: #828282;
    --gray-3: #E0E0E0;
    --container: 1216px;
    --container-with-padding: 1264px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }
`;
