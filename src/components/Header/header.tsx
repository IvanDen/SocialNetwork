import React from 'react';
import Class from './header.module.css';
import {NavLink} from "react-router-dom";
import Logo from "../Common/Logo/Logo";

export type MapHeaderPropsType = {
    isAuth: boolean;
    login: string | null;
}
export type DispatchHeaderPropsType = {
    logout: () => void;
}


const Header: React.FC<MapHeaderPropsType & DispatchHeaderPropsType> = (props) => {
    return (
        <header>
            <Logo />
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