import { Header } from "./components/Header";
import { GameDesc } from "./components/GameDesc";
import { SteamLink } from "./components/SteamLink";
import { Footer } from "./components/Footer";
import { steamLinksData } from "./data/steamLinksData";
import "./App.css";

export function App() {
  const gridClassName = steamLinksData.length === 2 ? "steam-links-grid-two" : steamLinksData.length === 1 ? "steam-links-one" : "steam-links-grid";

  return (
    <>
      <Header />
      <GameDesc />
      <div className={gridClassName}>
        {steamLinksData.map((linkData, index) => (
          <SteamLink key={index} title={linkData.title} src={linkData.src} />
        ))}
      </div>
      <Footer/>
    </>
  );
}
