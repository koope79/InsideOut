import React from "react";
import s from './Projection.module.css';
import sg from '../common/GeneralStyles.module.css';
import ToolForm from "./ToolForm";
import imageDefault from '../../assets/images/default-image.png';
import Gallery from "../common/Gallery";


const Projection = ( {projectionMemoryImage, galleryMemoryImage, arrow, setProjectionMemory, setDataMemoryTh, resetGallery} ) => {
    return (
        <div className={s.projection}>
            <div className={s.currentProjection}>
                <div className={sg.title}>Сейчас проекцируется</div>

                <div className={s.currentProjection__image}>
                    <img src={projectionMemoryImage == null ? imageDefault : projectionMemoryImage} alt={'memory'} />
                </div>
            </div>

            <div className={s.toolsProjection}>

                <div className={sg.title}>Выбрать для проецирования</div>
                <ToolForm setDataMemoryTh={setDataMemoryTh}/>

                <Gallery size={"small"} arrow={arrow} galleryMemoryImage={galleryMemoryImage}/>
                
                <div className={sg.form__button}>
                    <button onClick={ ()=>{setProjectionMemory(galleryMemoryImage); resetGallery();} }>Выбрать</button>
                </div>

            </div>

        </div>
    );
}

export default Projection;