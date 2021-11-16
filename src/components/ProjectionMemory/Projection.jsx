import React from "react";
import s from './Projection.module.css';
import ToolForm from "./ToolForm";
import imageDefault from '../../assets/images/default-image.png';
import leftArrow from '../../assets/images/left-arrow.png';
import rightArrow from '../../assets/images/right-arrow.png';


const Projection = ( {projectionMemoryImage, galleryMemoryImage, arrow, setProjectionMemory, setSrcData} ) => {
    return (
        <div className={s.projection}>
            <div className={s.currentProjection}>
                <div className={s.title + ' ' + s.currentProjectionTitle}>Сейчас проекцируется</div>

                <div className={s.currentProjection__image}>
                    <img src={projectionMemoryImage == null ? imageDefault : projectionMemoryImage} alt={'memory'} />
                </div>
            </div>

            <div className={s.toolsProjection}>

                <div className={s.title}>Выбрать для проецирования</div>
                <ToolForm setSrcData={setSrcData}/>

                <div className={s.toolsProjection__gallery}>
                    <div className={s.toolsProjection__arrow} onClick={() => { arrow(0) }}>
                        <img src={leftArrow} alt={'arr'} />
                    </div>
                    <div className={s.toolsProjection__image}>
                        <img src={galleryMemoryImage == null ? imageDefault : galleryMemoryImage} alt={'memory'} />
                    </div>
                    <div className={s.toolsProjection__arrow} onClick={() => { arrow(1) }}>
                        <img src={rightArrow} alt={'arr'} />
                    </div>
                </div>
                <div className={s.toolsProjection__button}>
                    <button onClick={ ()=>{setProjectionMemory()} }>Выбрать</button>
                </div>

            </div>

        </div>
    );
}

export default Projection;