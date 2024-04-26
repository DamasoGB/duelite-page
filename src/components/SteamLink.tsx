// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useTranslation } from "react-i18next";
import wishlistImg from '../assets/wishlistSteam.webp'

export function SteamLink({ language }) {
  const { t } = useTranslation("common");

  return (
    <>
      <h2 className="wishlistText">{t("game.add")}:</h2>
      <div className="wishlistContainer">
        <a href="https://store.steampowered.com">
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
