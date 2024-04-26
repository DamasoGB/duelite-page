import { Dispatch, SetStateAction, useState } from "react";
import { Header } from "./components/Header";
import { GameDesc } from "./components/GameDesc";
import { SteamLink } from "./components/SteamLink";
import { ImageSlider } from "./components/ImageSlider";
import { GameInfo } from "./components/GameInfo";
import { Footer } from "./components/Footer";
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
      <GameInfo language={language} />
      <ImageSlider />
      <Footer/>
    </>
  );
}
