import React from "react";
import classnames from 'classnames';
import sg from '../common/GeneralStyles.module.css';
import Fear from "./Fear";

const ResultSearchFears = ({fearsData, selectFearData, setDataGallery}) => {
    let fears = fearsData.map((f) => (<Fear key={f.id} data={f}
        selectFearData={selectFearData} setDataGallery={setDataGallery} />));

    return (
        <div className={sg.resultSearch}>
        {fears.length > 0 &&
            <div className={sg.resultSearch__block}>
                <div className={sg.resultSearch__title}>Дата</div>
                <div className={classnames(sg.resultSearch__title, sg.resultSearch__centerField)}>Описание</div>
                <div className={sg.resultSearch__title}>Тематика</div>
            </div>}
        <div className={sg.resultBlock}>{fears}</div>
    </div>
    );
}

export default ResultSearchFears;