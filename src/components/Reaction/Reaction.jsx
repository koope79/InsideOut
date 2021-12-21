import React from "react";
import s from './Reaction.module.css';
import sg from '../common/GeneralStyles.module.css';
import st from '../Memories/Memories.module.css';
import ToolForm from "../ProjectionMemory/ToolForm";
import ResultSearch from "../common/ResultSearch";
import imageDefault from '../../assets/images/default-image.png';
import ReactionForm from "./ReactionForm";

const Reaction = ({ reactionData, setDataMemoryTh, memoriesData, galleryMemoryImage,
    arrow, selectMemoryData, setDataGallery, projectionMemoryImage }) => {
    return (
        <div className={s.reaction}>

            <div className={s.reaction__flexBox}>
                <div className={s.reaction__display}>
                    <div className={sg.title}>Выполнить ответное действие</div>
                    {/* Другая форма для поиска воздействия */}
                    <div className={st.searchForm}>
                        <ToolForm setDataMemoryTh={setDataMemoryTh} sizeButton={"middle"} />    
                    </div>
                    <ResultSearch memoriesData={memoriesData} selectMemoryData={selectMemoryData} setDataGallery={setDataGallery} />
                    <div className={s.currentReaction__image}>
                        <img src={projectionMemoryImage == null ? imageDefault : projectionMemoryImage} alt={'memory'} />
                    </div>
                </div>

                <div className={sg.toolBar}>
                    <div className={sg.title}>Действия</div>
                    <ReactionForm reactionData={reactionData} arrow={arrow} galleryMemoryImage={galleryMemoryImage} setDataGallery={setDataGallery}/>
                </div>
            </div>
        </div>
    );
}

export default Reaction;