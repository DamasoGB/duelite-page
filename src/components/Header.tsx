// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from '../assets/placeholderTiny.webp';
import enFlag from '../assets/Flag_of_the_United_Kingdom.svg';
import esFlag from '../assets/Flag_of_Spain.svg';
import frFlag from '../assets/Flag_of_France.svg';
import "../styles/Header.css";

export function Header({ language, setLanguage }) {
  const [showMenu, setShowMenu] = useState<boolean>(true);

  const { i18n } = useTranslation("common");

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <header className="header">
        <img
          alt="Betaking Studios"
          className="logo"
          src={logo}
        />
        <div>
          <div
            className={`menu-toggle ${showMenu ? "open" : "close"}`}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </div>
          <nav className={`menu ${showMenu ? "show" : ""}`}>
            <ul>
              <li onClick={() => handleLanguageChange("es")}>
                <img
                  alt="Español"
                  src={esFlag}
                  className={language === 'es' ? "flagIconChoosed" : "flagIcon" }
                />
              </li>
              <li onClick={() => handleLanguageChange("en")}>
                <img
                  alt="English"
                  src={enFlag}
                  className={language === 'en' ? "flagIconChoosed" : "flagIcon" }
                />
              </li>
              <li onClick={() => handleLanguageChange("fr")}>
                <img
                  alt="Français"
                  src={frFlag}
                  className={language === 'fr' ? "flagIconChoosed" : "flagIcon" }
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
