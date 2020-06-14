import React from 'react';
import {actions, InitialStateType} from "../../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import { AppStateType } from '../../../redux/redux-store';

type DialogsContainerProps = {
    dialogsPage: InitialStateType;
    sendTextChat: (newMessageBody: string) => void;
    updateNewChatText: (defaultText: string) => void
    profile: any;
}

const DialogsContainer: React.FC<DialogsContainerProps> = (props) => {

        return (
            <Dialogs {...props}
                     updateNewChatText = { props.updateNewChatText }
                     dialogsPage = { props.dialogsPage }
            />
        )

}



let mapStateToProps = (state: AppStateType) => ({
    dialogsPage: state.dialogsPage
    // updateNewChatText: state.updateNewChatText
});

/*На вход compose получает значение, которое будет передано в качестве аргумента для первой функции,
//которая в свою очередь передает результат следующей,
//в конечном счете compose возвращает единственное значение, результат работы всех функций.*/
export default compose(
    connect(mapStateToProps, {...actions}),
    withAuthRedirect
)(DialogsContainer) as React.ComponentType;
