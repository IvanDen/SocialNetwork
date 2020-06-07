import React from 'react';
import {actions} from "../../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class DialogsContainer extends React.Component {

    render() {
        return (
            <Dialogs {...this.props}
                     updateNewChatText={this.props.updateNewChatText}
                     dialogsPage={this.props.dialogsPage}
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendTextChat: (newMessageBody) => {
            dispatch(actions.sendTextChat(newMessageBody));
        },
        updateNewChatText: (defaultText) => {
            dispatch(actions.updateNewChatText(defaultText));
        }
    }
}


let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
    updateNewChatText: state.updateNewChatText
});

/*На вход compose получает значение, которое будет передано в качестве аргумента для первой функции,
//которая в свою очередь передает результат следующей,
//в конечном счете compose возвращает единственное значение, результат работы всех функций.*/
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer);
