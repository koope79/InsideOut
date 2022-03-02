import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { logOut } from "../../redux/Auth-reducer";
import { CaseEmotion } from "../hoc/withEmotion";
import s from './Header.module.css';

const Header = ({isAuth, login, logOut, emotion}) => {
    return (
        <header className={s.header}>
            <div className={s.login}>
                {emotion && <CaseEmotion emotion={emotion}/>}
                {isAuth
                    ? <div className={s.logInUser}>{login} - <button onClick={logOut}>LogOut</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        emotion: state.auth.emotion
    }
}

export default connect(mapStateToProps, {logOut})(Header);
