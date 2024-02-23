import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import englishTranslations from "./translations/en-us.json";
import portugueseTranslations from "./translations/pt-br.json";

const resources = {
  en: {
    translation: englishTranslations,
  },
  pt: {
    translation: portugueseTranslations,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
});

export default i18next;
