import React from "react";
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.nav__item}>
                <NavLink to="/projection/" activeClassName={s.active}>Projection</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to="/memories/" activeClassName={s.active}>Memories</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to="/transport/" activeClassName={s.active}>Tranport</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to="/dreams/" activeClassName={s.active}>Dreams</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to="/fears/" activeClassName={s.active}>Fears</NavLink>
            </div>

        </nav>
    );
}

export default Navbar;