import { Header } from "./components/Header";
import { GameDesc } from "./components/GameDesc";
import { SteamLink } from "./components/SteamLink";
import "./App.css";
import { Dispatch, SetStateAction, useState } from "react";

interface ILanguage {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export function App() {
  const [language, setLanguage] = useState<ILanguage>();

  return (
    <>
      <Header setLanguage={setLanguage} />
      <GameDesc language={language} />
      <SteamLink language={language} />
    </>
  );
}
