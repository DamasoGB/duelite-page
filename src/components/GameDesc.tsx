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
                    {t('game.paragraph1')}
                    {t('game.paragraph2')}
                </span>
                    {t('game.paragraph3')}
            </div>
        </>
    )
}