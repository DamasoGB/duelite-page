import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";
import common_fr from "./translations/fr/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      common: common_es,
    },
    en: {
      common: common_en,
    },
    fr: {
      common: common_fr,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
