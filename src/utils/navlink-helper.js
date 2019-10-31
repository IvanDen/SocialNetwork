import {NavLink} from "react-router-dom";
import React from 'react';

export const navLink = (to, activeClassName, text = "") => (
        <NavLink to={to} activeClassName={activeClassName}>{text}</NavLink>
)