import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App/App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './styles';

import { initFirebase } from 'utils/firebase';
import 'utils/i18n';

initFirebase();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
