import React from "react";
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.login}>
                <a>Login</a>
            </div>
        </header>
    );
}

export default Header;