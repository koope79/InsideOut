import React from "react";
import st from '../Memories/Memories.module.css';
import sg from '../common/GeneralStyles.module.css';
import s from './Dreams.module.css';
import ToolForm from "../ProjectionMemory/ToolForm";
import Gallery from "../common/Gallery";
import ResultSearch from "../common/ResultSearch";
import SelectedDreamsForm from "./SelectedDreamsForm";

const Dreams = ({ resetGallery, setDataMemoryTh, memoriesData, galleryMemoryImage,
    arrow, currentMemory, selectMemoryData, setDataGallery, dreamsData, addDreamsData, generationDream, dreamsProjectionData, thDreams }) => {

    return (
        <div className={s.dreams}>
            <div className={s.dreams__flexBox}>
                <div className={s.dreams__search}>
                    <div className={sg.title}>Сновидения</div>
                    <div className={st.searchForm}>
                        <ToolForm setDataMemoryTh={setDataMemoryTh} sizeButton={"middle"} />
                    </div>
                    <ResultSearch memoriesData={memoriesData} selectMemoryData={selectMemoryData} setDataGallery={setDataGallery} />
                    <Gallery size={"middle"} arrow={arrow} galleryMemoryImage={galleryMemoryImage} />
                    <div className={sg.general__button}>
                        <button onClick={() => {addDreamsData(currentMemory)}} disabled={currentMemory.length == 0 ? "disabled" : ""}>Добавить</button>
                    </div>
                    
                </div>

                <div className={sg.toolBar}>
                    <div className={sg.title}>Выбранные воспоминания</div>
                    <div className={s.dreams__selectedMemory}>
                        <SelectedDreamsForm dreamsData={dreamsData} generationDream={generationDream}/>
                    </div>
                    <div className={s.dreams__scenario}>
                    </div>
                    <div className={s.dreams__projection}>
                        <div className={sg.general__button}>
                            <button onClick={()=>{thDreams(dreamsProjectionData);}}>Запись</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div >
    );
}

export default Dreams;