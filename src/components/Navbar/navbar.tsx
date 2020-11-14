import React from 'react';
import Class from './navbar.module.css';
import {NavLink} from "react-router-dom";
import Best from "./bestfriends/Best";

const Navbar: React.FC = () => {
    return (
        <nav className={Class.navSide}>
            <div className={`${Class.item} ${Class.active}`}>
                <NavLink to="/profile" activeClassName={Class.active}>Profile</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to="/dialogs" activeClassName={Class.active}>Messages</NavLink>
            </div>
            <div className={Class.item}>
                <NavLink to="/developers" activeClassName={Class.active}>Users</NavLink>
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

export default Navbar;
