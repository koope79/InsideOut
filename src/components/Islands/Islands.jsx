import React from "react";
import s from './Islands.module.css';
import sg from '../common/GeneralStyles.module.css';
import classNames from "classnames";
import { useState } from "react";

const Islands = ({ islandsPersonality, listTypes, getIslandsPersonality, getListTypesMemories, pickTypeMemory, errorMessage }) => {
    let [islands, setIslands] = useState(true);

    let islandsPer = islandsPersonality.map(m => (<div className={classNames(s.islands__item, sg.subTitle)}>{m}</div>));
    let types = listTypes.map(t => (<div className={classNames(s.islands__item, sg.subTitle, s.islands__type)} onClick={() => { pickTypeMemory(Object.keys(t)); setIslands(true); }}>
        {Object.keys(t)}: {Object.values(t)}
    </div>))

    return (
        <div className={s.islands}>
            <div className={sg.title}>Острова Личности</div>
            {islands &&
                <div>
                    <div className={s.islands__desc}>Дествущие острова личности</div>
                    <div className={s.islands__person}>
                        {islandsPer}
                    </div>
                    {errorMessage 
                        ?   <div>
                                <div className={sg.errorField}>Ошибка загрузки островов личности!</div>
                                <div className={classNames(sg.form__button, s.islands__button)}>
                                    <button onClick={() => { getIslandsPersonality() }}>Обновить</button>
                                </div>
                            </div>
                        :   <div className={classNames(sg.form__button, s.islands__button)}>
                                <button onClick={() => { getListTypesMemories(); setIslands(false); }} disabled={errorMessage ? "disabled" : ""}>Сформировать</button>
                            </div>
                    }
                </div>
            }
            {!islands &&
                <div>
                    <div className={s.islands__desc}>Выберите тип воспоминания для формирования острова личности</div>
                    <div className={s.islands__person}>
                        {errorMessage 
                        ? <div className={sg.errorField}>Ошибка типов воспоминаний!</div>
                        : types}
                    </div>
                    <div className={classNames(sg.form__button, s.islands__button)}>
                        <button onClick={() => { getIslandsPersonality(); setIslands(true); }}>Назад</button>
                    </div>
                </div>
            }
        </div >
    );
}

export default Islands;