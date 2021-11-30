import React from "react";
import st from '../Memories.module.css';
import sg from '../../common/GeneralStyles.module.css';
import SortForm from "./SortForm";
import s from './Sort.module.css';


const Sort = ({}) => {
    return (
        <div className={st.container}>
            <div className={sg.title}>Сортировка воспоминаний</div>
            <div className={st.sortForm}><SortForm /></div>
        </div>
    );
}

export default Sort;