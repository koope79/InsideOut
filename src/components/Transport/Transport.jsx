import React, {useState} from "react";
import st from '../Memories/Memories.module.css';
import sg from '../common/GeneralStyles.module.css';
import s from './Transport.module.css';
import ToolForm from "../ProjectionMemory/ToolForm";
import Gallery from "../common/Gallery";
import ResultSearch from "../common/ResultSearch";

const Transport = ({ transportMemory, resetGallery, setDataMemoryTh, 
    memoriesData, galleryMemoryImage, arrow, currentMemory, selectMemoryData, setDataGallery, errorMessage, isSuccessInfo, setSuccessInfo }) => {

    const [selectedOption, setSelectedOption] = useState("DEFAULT");

    return (
        <div className={s.transport}>
            <div className={st.container}>
                <div className={sg.title}>Транспортировать воспоминание</div>
                <div className={st.searchForm}>
                    <ToolForm setDataMemoryTh={setDataMemoryTh} sizeButton={"middle"} />
                </div>

                {errorMessage &&
                    <div className={sg.errorField}>Ошибка поиска или транспортирования. Повторите запрос.</div>}

                <ResultSearch memoriesData={memoriesData} selectMemoryData={selectMemoryData} setDataGallery={setDataGallery} />
                <Gallery arrow={arrow} galleryMemoryImage={galleryMemoryImage} />

                <div className={s.transport__select}>
                    <div className={sg.subTitle}>Место доставки</div>
                    <select value={selectedOption} name="MemorySelect" onChange={e => setSelectedOption(e.target.value)}>
                        <option value={"DEFAULT"} disabled>---</option>
                        <option value="долговременная память" disabled={currentMemory.memoryLocation == "долговременная память"  ? true : false}>долговременная память</option>
                        <option value="кратковременная память" disabled={currentMemory.memoryLocation == "кратковременная память" ? true : false}>кратковременная память</option>
                    </select>
                </div>
                <div className={sg.general__button}>
                    <button onClick={() => {transportMemory(currentMemory, selectedOption); resetGallery(); setSelectedOption("DEFAULT"); }} disabled={(currentMemory.length == 0 || selectedOption == "DEFAULT") ? "disabled" : (currentMemory.memoryLocation == selectedOption) ? "disabled" : ""}>Отправить</button>
                </div>
                {isSuccessInfo &&
                <SuccessBlock setSuccessInfo={setSuccessInfo}/>}
            </div>
        </div>
    );
}

const SuccessBlock = ({setSuccessInfo}) => {
    return (
        <div className={s.successBlock}>
            <div className={s.successBlock__container}>
                <div className={s.successImage}></div>
                <div className={sg.title}>Готово!</div>
                <div className={sg.desc}><p>Ваш запрос был отправлен!</p>
                <p>Ожидайте доставку воспоминания в течение 10 сек.</p></div>
                <div className={sg.form__button}>
                    <button onClick={()=>{setSuccessInfo(false)}}>Ок</button>
                </div>
            </div>
        </div>
    );
}

export default Transport;