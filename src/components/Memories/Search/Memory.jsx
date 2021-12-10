import React from "react";
//import st from '../Memories.module.css';
import sg from '../../common/GeneralStyles.module.css';
import classnames from 'classnames';


const Memory = ({ data, selectMemoryData, setDataGallery }) => {
    return (
        <div className={sg.memory} onClick={() => { selectMemoryData(data); setDataGallery(data.src); }}>
            <div className={sg.memory__field}>{data.date}</div>
            <div className={classnames(sg.memory__field, sg.memory__centerField)}>{data.description}</div>
            <div className={sg.memory__field}>{data.rating}</div>
        </div>
    );
}

export default Memory;