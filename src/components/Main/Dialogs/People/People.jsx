import React from 'react';
import Class from './People.module.css';
import {NavLink} from "react-router-dom";


const People = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={Class.items}>
            <NavLink to={path} activeClassName={Class.active}>{props.userName}</NavLink>
        </div>
    );
}

export default People;