import React from 'react';
import Class from './FooterNavLink.module.css';
import {NavLink} from "react-router-dom";

const FooterNavLink = () => {
    return (
        <nav className={Class.footerNav}>
            <div className={`${Class.item} ${Class.active}`}>
                <NavLink to="/profile" activeClassName={Class.active}>Profile</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to="/dialogs" activeClassName={Class.active}>Messages</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to="/users" activeClassName={Class.active}>Users</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to="/news" activeClassName={Class.active}>News</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to="/music" activeClassName={Class.active}>Music</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to="/settings" activeClassName={Class.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default FooterNavLink;