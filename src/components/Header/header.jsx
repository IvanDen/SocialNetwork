import React from 'react';
import Class from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            {/*<img className={Class.logo} src={'/img/logo.png'} alt="logo"/>*/}
            <img className={Class.logo} src={'/img/socialLogo.png'} alt="logo"/>

            <div className={Class.loginBlock}>
                {props.isAuth
                    ? <div className={Class.userNameWrap}>
                        <span className={`${Class.linc} ${Class.isLogin}`}>{props.login}</span>
                        <button onClick={props.logout}>Logout</button>
                      </div>
                    : <NavLink className={Class.linc} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;