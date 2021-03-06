import React from "react";
import s from './Fears.module.css';
import sg from '../common/GeneralStyles.module.css';
import st from '../Memories/Memories.module.css';
import ToolForm from "../ProjectionMemory/ToolForm";
import Gallery from "../common/Gallery";
import SaveFearForm from "./SaveFearForm";
import ResultSearchFears from "./ResultSearchFears";


const Fears = ({ errorMessage, fearsData, saveFear, galleryMemoryImage, currentFear, arrow, 
    resetGallery, resetFearData, selectFearData, setDataGallery, getFearsData, countReleaseFears, countFearsTh, countFears, walkingFear }) => {
    // добавить запрос на добавление страха для <SaveFearForm />
    return (
        <div className={s.fears}>
            <div className={s.fearsFlexBox}>
                <div className={s.fears__search}>
                    <div className={sg.title}>Страхи</div>
                    <div className={st.searchForm}>
                        <ToolForm setDataMemoryTh={getFearsData} sizeButton={"middle"} />
                    </div>
                    <ResultSearchFears fearsData={fearsData} selectFearData={selectFearData} setDataGallery={setDataGallery} />
                    <Gallery size={"middle"} arrow={arrow} galleryMemoryImage={galleryMemoryImage} />
                    <div className={sg.general__button}>
                        <button onClick={() => { walkingFear(currentFear); resetGallery(); resetFearData(); countFearsTh(); }} disabled={currentFear.length == 0 ? "disabled" : ""}>Выпустить</button>
                    </div>
                </div>
                <div className={sg.toolBar}>
                    <div className={sg.title}>Добавить страх</div>
                    <div className={s.saveFearForm}><SaveFearForm saveFear={saveFear}/></div>
                    <div className={s.fears__errorMessage}>{errorMessage}</div>
                    <div className={s.fears__countBar}>
                        <div className={s.countBar__item}>
                            <div>Всего страхов:</div>
                            <div>{countFears}</div>
                        </div>
                        <div className={s.countBar__item}>
                            <div>Выпущенные страхи:</div>
                            <div>{countReleaseFears}</div>
                        </div>
                        <div className={s.refreashButtonBar}>
                            <button onClick={() => { countFearsTh(); }}>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fears;