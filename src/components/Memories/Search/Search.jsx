import React, { useState } from "react";
import ToolForm from "../../ProjectionMemory/ToolForm";
import st from '../Memories.module.css';
import sg from '../../common/GeneralStyles.module.css';
import Gallery from "../../common/Gallery";


const Search = ({setDataMemoryTh, memoryData, galleryMemoryImage, arrow }) => {
    let [info, infoSet] = useState(false);
    
    return (
        <div className={st.search}>
            <div className={st.container}>
                <div className={sg.title}>Найти воспоминание</div>
                <div className={st.searchForm}>
                    <ToolForm setDataMemoryTh={setDataMemoryTh} sizeButton={"middle"}/>
                </div>

                <Gallery arrow={arrow} galleryMemoryImage={galleryMemoryImage}/>
  
                <div className={sg.general__button}>
                    <button onClick={() => { infoSet(true); }} disabled={memoryData == null ? "disabled" : ""}>Информация</button>
                </div>
                {info && <InfoBlock infoSet={infoSet} desc={memoryData.description} memoryLocation={memoryData.memoryLocation} rating={memoryData.rating} />}
            </div>
        </div>
    );
}

const InfoBlock = (props) => {
    return(
        <div className={st.infoBlock}>
            <div className={st.infoBlock__closeButton}>
                <button onClick={()=>{props.infoSet(false);}}>X</button>
            </div>
            <div className={st.infoBlock__bodyText}>
                <p><b>Описание:</b> {props.desc}</p>
                <p><b>Расположение:</b> {props.memoryLocation}</p>
                <p><b>Критерий важности:</b> {props.rating}</p>
            </div>
        </div>
    );
}

export default Search;