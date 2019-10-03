import React from 'react';
import {sendTextChat, updateNewChatText} from "../../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps,
    {sendTextChat, updateNewChatText,})(Dialogs);

export default DialogsContainer;