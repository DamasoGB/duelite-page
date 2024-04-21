// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useTranslation } from "react-i18next";
import dueliteLogo from '../assets/placeholder.webp'
import dueliteIcon from '../../public/jhony_coust.webp'

export function GameDesc({language}){
    const { t } = useTranslation("common");

    return(
        <>
            <div className="gameContainer">
                <img alt="Duelite Logo" src={dueliteLogo} className="gameLogo"/>
            </div>
            <div className="descContainer">
                <img alt="Icon Duelite" src={dueliteIcon} className="gameIcon"/>
                <p className="description">
                    {t('game.paragraph1')}
                    <br /><br/>
                    {t('game.paragraph2')}
                </p>
            </div>
        </>
    )
}