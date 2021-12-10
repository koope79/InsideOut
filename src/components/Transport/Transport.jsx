import React from "react";
import st from '../Memories/Memories.module.css';
import sg from '../common/GeneralStyles.module.css';
import s from './Transport.module.css';
import ToolForm from "../ProjectionMemory/ToolForm";
import Gallery from "../common/Gallery";
import ResultSearch from "../common/ResultSearch";

const Transport = ({ transportMemory, resetGallery, setDataMemoryTh, memoriesData, galleryMemoryImage, arrow, currentMemory, selectMemoryData, setDataGallery }) => {

    return (
        <div className={s.transport}>
            <div className={st.container}>
                <div className={sg.title}>Транспортировать воспоминание</div>
                <div className={st.searchForm}>
                    <ToolForm setDataMemoryTh={setDataMemoryTh} sizeButton={"middle"} />
                </div>

                <ResultSearch memoriesData={memoriesData} selectMemoryData={selectMemoryData} setDataGallery={setDataGallery} />
                <Gallery arrow={arrow} galleryMemoryImage={galleryMemoryImage} />

                <div className={s.transport__select}>
                    <div className={sg.subTitle}>Место доставки</div>
                    <select defaultValue="DEFAULT" name="MemorySelect" disabled>
                        <option value="DEFAULT">---</option>
                        <option value="долговременная память" selected={currentMemory.memoryLocation == "кратковременная память" ? true : false}>долговременная память</option>
                        <option value="кратковременная память" selected={currentMemory.memoryLocation == "долговременная память"  ? true : false}>кратковременная память</option>
                    </select>
                </div>
                <div className={sg.general__button}>
                    <button onClick={() => {transportMemory(currentMemory); resetGallery();}} disabled={galleryMemoryImage === null ? "disabled" : ""}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Transport;