import React from "react";
import st from '../Memories.module.css';
import sg from '../../common/GeneralStyles.module.css';
import s from './Save.module.css';
import SaveForm from "./SaveForm";


const Save = ({ galleryMemoryImage, arrow, setDataGallery, saveMemoryTh }) => {

    return (
        <div className={st.container}>
            <div className={sg.title}>Сохранение воспоминания</div>
            <div className={s.saveForm}>
                <SaveForm saveMemoryTh={saveMemoryTh} setDataGallery={setDataGallery} arrow={arrow} galleryMemoryImage={galleryMemoryImage} />
            </div>
        </div>
    );
}

export default Save;