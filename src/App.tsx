import { BrowserRouter } from "react-router-dom";
import { Normalize } from "styled-normalize";

import { AppRoutes } from "./routes";

import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
      </Theme>
    </BrowserRouter>
  );
}
