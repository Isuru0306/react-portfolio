import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homeEN from "@/locales/en/home.json";
import homeLK from "@/locales/lk/home.json";

i18n.use(initReactI18next).init({
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
