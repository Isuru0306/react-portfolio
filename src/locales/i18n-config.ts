import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homeEN from "@/locales/en/home.json";
import homeLK from "@/locales/lk/home.json";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        home: homeEN,
      },
      lk: {
        home: homeLK,
      },
    },
    fallbackLng: "en",
  });
