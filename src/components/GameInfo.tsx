// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useTranslation } from "react-i18next";

export function GameInfo({language}){
    const { t } = useTranslation("common");

    return(
        <h2 className="gameInfo">
            {t('game.info')}
        </h2>
    )
}