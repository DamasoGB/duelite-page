// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from '../assets/betakingweb/paginawweb-2.webp';
import "../styles/Header.css";

export function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(true);

  const { i18n } = useTranslation("common");

  return (
    <>
      <header className="header">
        <img
          alt="Betaking Studios"
          className="logo"
          src={logo}
        />
      </header>
    </>
  );
}
