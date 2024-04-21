// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useTranslation } from "react-i18next";
import wishlistImg from '../assets/wishlistSteam.png'

export function SteamLink({ language }) {
  const { t } = useTranslation("common");

  return (
    <>
      <h2 className="wishlistText">{t("game.add")}:</h2>
      <div className="wishlistContainer">
        <a href="https://www.google.es">
          <img
            alt="Wishlist on Steam"
            src={wishlistImg}
            className="wishlist"
          />
        </a>
      </div>
    </>
  );
}
