import { Dispatch, SetStateAction, useState } from "react";
import { Header } from "./components/Header";
import { GameDesc } from "./components/GameDesc";
import { SteamLink } from "./components/SteamLink";
import { ImageSlider } from "./components/ImageSlider";
import { IMAGES } from "./assets/data";
import "./App.css";

interface ILanguage {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export function App() {
  const [language, setLanguage] = useState<ILanguage>();

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <GameDesc language={language} />
      <SteamLink language={language} />
      <ImageSlider images={IMAGES} />
    </>
  );
}
