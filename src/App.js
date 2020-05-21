import React from "react";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import { MuiThemeProvider } from "material-ui/styles";

function App() {
  return (
    <MuiThemeProvider>
      <NavBar />
    </MuiThemeProvider>
  );
}

export default App;
