import React from "react";
import Router from "./components/Router";
import { AppContainer } from "./pages/styled";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const meuTema = createMuiTheme({
  palette: {
    primary: {
      main: "#ff6000"
    },
    secondary: {
      main: "#ffffff"
    }
  }
})

function App() {
  return(
    <MuiThemeProvider theme={meuTema}>
      <AppContainer>
        <Router />
      </AppContainer>
    </MuiThemeProvider>
  );
}

export default App;
