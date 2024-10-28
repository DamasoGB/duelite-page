import { Header } from "./components/Header";
import { GameDesc } from "./components/GameDesc";
import { SteamLink } from "./components/SteamLink";
import { Footer } from "./components/Footer";
import "./App.css";

export function App() {

  return (
    <>
      <Header />
      <GameDesc />
      <SteamLink />
      <Footer/>
    </>
  );
}
