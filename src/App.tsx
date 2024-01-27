import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme/theme';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
