import React from "react";
import classnames from 'classnames';
import sg from './GeneralStyles.module.css';
import Memory from "../Memories/Search/Memory";

const ResultSearch = ({memoriesData, selectMemoryData, setDataGallery}) => {
    let memories = memoriesData.map((m) => (<Memory key={m.id} data={m}
        selectMemoryData={selectMemoryData} setDataGallery={setDataGallery} />));

    return (
        <div className={sg.resultSearch}>
        {memories.length > 0 &&
            <div className={sg.resultSearch__block}>
                <div className={sg.resultSearch__title}>Дата</div>
                <div className={classnames(sg.resultSearch__title, sg.resultSearch__centerField)}>Описание</div>
                <div className={sg.resultSearch__title}>Критерий важности</div>
            </div>}
        <div className={sg.resultBlock}>{memories}</div>
    </div>
    );
}

export default ResultSearch;