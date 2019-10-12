import React from 'react';
import {sendTextChat} from "../../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


/*На вход compose получает значение, которое будет передано в качестве аргумента для первой функции, которая в свою очередь передает результат следующей, в конечном счете compose возвращает единственное значение, результат работы всех функций.*/
export default compose(
    connect(mapStateToProps, {sendTextChat}),
    // withAuthRedirect
)(Dialogs);