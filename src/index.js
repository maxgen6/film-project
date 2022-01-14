import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import App from 'components/App/App';
import { store } from 'store';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './styles';

import { initFirebase } from 'utils/firebase';
import i18n from 'utils/i18n';

initFirebase();

ReactDOM.render(
  <>
    <Provider store={store}>
      <React.StrictMode>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </I18nextProvider>
      </React.StrictMode>
    </Provider>
  </>,
  document.getElementById('root')
);
