import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const Languages = ['en'];

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,
  whitelist: Languages,
});

export default i18n;
