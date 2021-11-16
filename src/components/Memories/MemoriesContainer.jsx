import React from "react";
import { NavLink } from 'react-router-dom';
import s from './Memories.module.css';

const MemoriesContainer = (props) => {
    return (
        <div className={s.content}>
            <div className={s.flexBoxNav}>
                <div className={s.navButton}>
                    <NavLink to="/memories/search" className={s.linkButton}>Search</NavLink>
                </div>
                <div className={s.navButton}>
                    <NavLink to="/memories/sort" className={s.linkButton}>Sort</NavLink>
                </div>
                <div className={s.navButton}>
                    <NavLink to="/memories/save" className={s.linkButton}>Save</NavLink>
                </div>
            </div>

        </div>
    );
}

export default MemoriesContainer;