// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useTranslation } from "react-i18next";

export function GameDesc({language}){
    const { t } = useTranslation("common");

    return(
        <>
            <div className="gameContainer">
                <img alt="Duelite Logo" src="src/assets/placeholder.png" className="gameLogo"/>
            </div>
            <div className="descContainer">
                <img alt="Icon Duelite" src="public/jhony_coust.png" className="gameIcon"/>
                <p className="description">
                    {t('game.paragraph1')}
                    <br /><br/>
                    {t('game.paragraph2')}
                </p>
            </div>
        </>
    )
}