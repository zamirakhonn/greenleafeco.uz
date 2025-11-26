import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationUZ from './locales/uz/translation.json';
import translationKZ from './locales/kz/translation.json';
import translationCN from './locales/сn/translation.json';

const savedLanguage = localStorage.getItem('language') || 'uz';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      ru: { translation: translationRU },
      uz: { translation: translationUZ },
      kz: { translation: translationKZ },
      cn: { translation: translationCN },
    },
    lng: savedLanguage,
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
  });

i18n.on("languageChanged", lng => {
  localStorage.setItem("language", lng);
});

export default i18n;