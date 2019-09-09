import React from 'react';
import {sendTextChatActionCreator, updateNewChatTextActionCreator} from "../../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         { store => {
//
//             let state = store.getState().dialogsPage;
//
//             let sendMessage = () => {
//                 store.dispatch(sendTextChatActionCreator());
//             }
// //We control the entered text in the state
//             let onMessageChange = (text) => {
//                 store.dispatch(updateNewChatTextActionCreator(text));
//             };
//
//             return <Dialogs updateNewChatText={onMessageChange} sendTextChat={sendMessage} dialogsPage={state}/>
//             }
//         }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewChatText: (text) => {
            dispatch(updateNewChatTextActionCreator(text))
        },
        sendTextChat:  () => {
            dispatch(sendTextChatActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;