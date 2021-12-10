import React from "react";
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

const Navbar = ({ isAuth }) => {
    return (
        <nav className={s.nav}>
            <div className={s.nav__item}>
                <NavLink to="/projection" className={(navData) => navData.isActive ? s.active : ""}>Projection</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to="/memories" className={(navData) => navData.isActive ? s.active : ""}>Memories</NavLink>
            </div>
            {isAuth &&
                <div className={s.nav__item}>
                    <NavLink to="/transport" className={(navData) => navData.isActive ? s.active : ""}>Transport</NavLink>
                </div>
            }
            <div className={s.nav__item}>
                <NavLink to="/dreams" className={(navData) => navData.isActive ? s.active : ""}>Dreams</NavLink>
            </div>
            <div className={s.nav__item}>
                <NavLink to="/fears" className={(navData) => navData.isActive ? s.active : ""}>Fears</NavLink>
            </div>
            {isAuth &&
                <div className={s.nav__item}>
                    <NavLink to="/islands" className={(navData) => navData.isActive ? s.active : ""}>Islands</NavLink>
                </div>
            }
        </nav>
    );
}

const mapToStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapToStateToProps, {})(Navbar);
