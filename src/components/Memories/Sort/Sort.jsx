import React from "react";
import st from '../Memories.module.css';
import sg from '../../common/GeneralStyles.module.css';
import SortForm from "./SortForm";
//import s from './Sort.module.css';
import classnames from 'classnames';


const Sort = ({ selectionMemoriesSort }) => {
    return (
        <div className={st.container}>
            <div className={sg.title}>Сортировка воспоминаний</div>
            <div className={st.sortForm}><SortForm selectionMemoriesSort={selectionMemoriesSort} /></div>
            <div className={sg.resultSearch}>
                <div className={sg.resultSearch__block}>
                    <div className={sg.resultSearch__title}>Дата</div>
                    <div className={classnames(sg.resultSearch__title, sg.resultSearch__centerField)}>Описание</div>
                    <div className={sg.resultSearch__title}>Критерий важности</div>
                </div>
            </div>
            <div className={sg.general__button}>
                <button onClick={() => { alert('sort') }}>Сортировать</button>
            </div>
        </div>
    );
}

export default Sort;