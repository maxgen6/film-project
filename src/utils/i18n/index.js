import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './resources';

i18n.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  resources: {
    en,
  },
  defaultNS: 'general',
  react: {
    wait: true,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
