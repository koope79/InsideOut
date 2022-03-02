import React from "react";
import s from './Projection.module.css';
import sg from '../common/GeneralStyles.module.css';
import ToolForm from "./ToolForm";
import imageDefault from '../../assets/images/default-image.png';
import Gallery from "../common/Gallery";
import Memory from "../Memories/Search/Memory";


const Projection = ( { memoriesData, selectMemoryData, setDataGallery, projectionMemoryImage, galleryMemoryImage, arrow, setProjectionMemory, setDataMemoryTh, resetGallery} ) => {

    let memories = memoriesData.map((m) => (<Memory key={m.id} data={m}
        selectMemoryData={selectMemoryData} setDataGallery={setDataGallery} />));

    return (
        <div className={s.projection}>
            <div className={s.currentProjection}>
                <div className={sg.title}>Сейчас проецируется</div>

                <div className={s.currentProjection__image}>
                    <img src={projectionMemoryImage == null ? imageDefault : projectionMemoryImage} alt={'memory'} />
                </div>
            </div>

            <div className={sg.toolBar}>

                <div className={sg.title}>Выбрать для проецирования</div>
                <ToolForm setDataMemoryTh={setDataMemoryTh}/>

                <div className={sg.resultSearch}>
                    {memories}
                </div>

                <Gallery size={"small"} arrow={arrow} galleryMemoryImage={galleryMemoryImage}/>
                
                <div className={sg.form__button}>
                    <button onClick={ ()=>{setProjectionMemory(galleryMemoryImage); resetGallery();} } disabled={galleryMemoryImage === null ? "disabled" : ""}>Выбрать</button>
                </div>

            </div>

        </div>
    );
}

export default Projection;