import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <h1>Zenith</h1>
    </ThemeProvider>
  );
}

export default App;
