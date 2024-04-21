// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useTranslation } from "react-i18next";

export function SteamLink({ language }) {
  const { t } = useTranslation("common");

  return (
    <>
      <h2 className="wishlistText">{t("game.add")}:</h2>
      <div className="wishlistContainer">
        <a href="https://www.google.es">
          <img
            alt="Wishlist on Steam"
            src="src/assets/wishlistSteam.png"
            className="wishlist"
          />
        </a>
      </div>
    </>
  );
}
