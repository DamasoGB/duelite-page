// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useTranslation } from "react-i18next";
import betakingLogo from '../assets/betakingweb/paginawweb-BLANCO.webp'

export function GameDesc(){
    const { t } = useTranslation("common");

    return(
        <>
            <img alt="Logo" src={betakingLogo} className="gameLogo"/>
            <div className="gameContainer">
                <span className="description">
                    {t('Betaking Studios is a small independent video game studio based in Murcia, Spain. Driven by passion and creativity, we craft the games we’d love to play. ')}
                    {t('Without any budget but with lots of dedication.')}
                </span>
                    {t('Welcome to Betaking Studios!')}
            </div>
        </>
    )
}
