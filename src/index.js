import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
