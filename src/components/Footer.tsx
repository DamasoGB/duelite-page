import { useTranslation } from "react-i18next";

export function Footer(){
    const { t } = useTranslation("common");

return(
    <div>
        <span>{t("game.available")}</span>
        <span>Español</span>
        <span>English</span>
        <span>Français</span>
        <span>Twitter</span>
        <span>{t("game.contact")}</span>
    </div>
)
}