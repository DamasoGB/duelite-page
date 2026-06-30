import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_es from "./translations/es/common.json";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrAndriu from "./components/DrAndriu.tsx";
import { AndresJimenezCV } from "./components/AndresJimenezCV.tsx";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      common: common_es,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/drandriu" element={<DrAndriu />} />
          <Route path="/andres-jimenez" element={<AndresJimenezCV />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
