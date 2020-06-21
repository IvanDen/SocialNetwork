import React from 'react';
import Class from './News.module.css';
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";



const News: React.FC = () => {
    return (
        <div>
            News
        </div>
    );
}

export default compose(
    withAuthRedirect
)(News);
