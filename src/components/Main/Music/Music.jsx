import React from 'react';

import {connect} from "react-redux";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";



const Music = (props) => {
    return (
        <div>
            Music
        </div>
    );
}


export default compose(
    withAuthRedirect
)(Music);