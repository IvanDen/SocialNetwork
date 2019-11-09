import React from 'react';
import Class from './Settings.module.css';
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";



const Settings = (props) => {
    return (
        <div>
            Settings
        </div>
    );
}

export default compose(
    withAuthRedirect
)(Settings);