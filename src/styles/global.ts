import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
  box-sizing: border-box;
}


  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.gray900};
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.white};
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,
  input,
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  input,
  select,
  textarea {
    border: none;
    outline: none;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }

  button {
    cursor: pointer;
    color: inherit;
  }

`;
