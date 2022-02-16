import React, { useState } from "react";
import ToolForm from "../../ProjectionMemory/ToolForm";
import st from '../Memories.module.css';
import sg from '../../common/GeneralStyles.module.css';
import Gallery from "../../common/Gallery";
import Memory from "./Memory";
import classnames from 'classnames';
import ResultSearch from "../../common/ResultSearch";


const Search = ({ setDataMemoryTh, memoriesData, galleryMemoryImage, arrow, currentMemory, selectMemoryData, setDataGallery, errorMessage }) => {
    let [info, infoSet] = useState(false);

    return (
        <div className={st.search}>
            <div className={st.container}>
                <div className={sg.title}>Найти воспоминание</div>
                <div className={st.searchForm}>
                    <ToolForm setDataMemoryTh={setDataMemoryTh} sizeButton={"middle"} />
                </div>
                
                {errorMessage &&
                <div className={sg.errorField}>Нет воспоминаний</div>}

                <ResultSearch memoriesData={memoriesData} selectMemoryData={selectMemoryData} setDataGallery={setDataGallery} />
                <Gallery arrow={arrow} galleryMemoryImage={galleryMemoryImage} />

                <div className={sg.general__button}>
                    <button name="infoButton" onClick={() => { infoSet(true); }} disabled={currentMemory.length == 0 ? "disabled" : ""}>Информация</button>
                </div>
                {info && <InfoBlock infoSet={infoSet} desc={currentMemory.description} memoryLocation={currentMemory.memoryLocation} rating={currentMemory.rating} />}
            </div>
        </div>
    );
}

const InfoBlock = (props) => {
    return (
        <div className={st.infoBlock}>
            <div className={st.infoBlock__closeButton}>
                <button onClick={() => { props.infoSet(false); }}>X</button>
            </div>
            <div className={st.infoBlock__bodyText}>
                <div className={st.infoBlock__bodyItem}>
                    <div className={st.infoBlock__bodyTitle}>Описание:</div>
                    <div className={st.infoBlock__bodyDesc}>{props.desc}</div>
                </div>
                <div className={st.infoBlock__bodyItem}>
                    <div className={st.infoBlock__bodyTitle}>Расположение:</div>
                    <div className={st.infoBlock__bodyDesc}>{props.memoryLocation}</div>
                </div>
                <div className={st.infoBlock__bodyItem}>
                    <div className={st.infoBlock__bodyTitle}>Критерий важности:</div>
                    <div className={st.infoBlock__bodyDesc}>{props.rating}</div>
                </div>
            </div>
        </div>
    );
}

export default Search;