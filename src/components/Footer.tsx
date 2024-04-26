// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useTranslation } from "react-i18next";
import enFlag from '../assets/Flag_of_the_United_Kingdom.svg';
import esFlag from '../assets/Flag_of_Spain.svg';
import frFlag from '../assets/Flag_of_France.svg';
import { Twitter, Mail } from "lucide-react";
import logo from '../assets/footerLogo.webp'

import '../styles/Footer.css'

export function Footer(){
    const { t } = useTranslation("common");

return(
    <footer>
        <img alt="logo" src={logo} className="footerLogo"/>
        <ul className="contactContainer">
            {t("game.contact")}
            <li>
                <Twitter size={20} absoluteStrokeWidth className="lucideIcon"/>
                <a href="https://twitter.com/duelitegame">@DueliteGame</a>
            </li>
            <li>
                <Mail size={20} absoluteStrokeWidth className="lucideIcon"/>
                <a href="mailto:betakingstudios@gmail.com">betakingstudios@gmail.com</a>
            </li>
        </ul>
        <ul className="availableList">{t("game.available")}
            <li>
                <img
                    alt="Español"
                    src={esFlag}
                    className="flagIconFooter"
                    />
                Español 
            </li>
            <li>
                <img
                    alt="English"
                    src={enFlag}
                    className="flagIconFooter"
                    />
                English
            </li>
            <li>
                <img
                    alt="Français"
                    src={frFlag}
                    className="flagIconFooter"
                    />
                Français
            </li>
        </ul>
    </footer>
)
}