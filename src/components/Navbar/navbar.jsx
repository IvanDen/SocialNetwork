import React from 'react';
import Class from './navbar.module.css';
import {NavLink} from "react-router-dom";
import Best from "./bestfriends/Best";

const Navbar = () => {
    return (
        <nav>
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
            <Best />
        </nav>
    );
}

export default Navbar;