import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import "./index.css";
import App from "./App";
import { CssBaseline } from "@material-ui/core";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    rating: Palette["primary"];
  }
  interface PaletteOptions {
    rating: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0052CC",
      dark: "#091E42",
    },
    secondary: {
      main: "#FF000A",
    },
    rating: {
      main: "#FFAB00",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          {
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 400,
          },
        ],
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
