import React from "react";
import sg from '../common/GeneralStyles.module.css';
import classnames from 'classnames';


const Fear = ({ data, selectFearData, setDataGallery }) => {
    return (
        <div className={sg.memory} onClick={() => { selectFearData(data); setDataGallery(data.src); }}>
            <div className={sg.memory__field}>{data.date}</div>
            <div className={classnames(sg.memory__field, sg.memory__centerField)}>{data.description}</div>
            <div className={sg.memory__field}>{data.type}</div>
        </div>
    );
}

export default Fear;