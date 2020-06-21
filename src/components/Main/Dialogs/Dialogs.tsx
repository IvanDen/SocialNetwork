import React from 'react';
import Class from './Dialogs.module.css';
import People from "./People/People";
import {Chat, ChatMy} from "./Chat/Chat";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators";
import {actions, InitialStateType} from '../../../redux/dialogs-reduser';

type OwnPropsType = {
    dialogsPage: InitialStateType;
    sendTextChat: (newMessageBody: string) => void;
    updateNewChatText: (defaultText: string) => void
    profile: any;
    userName: string;
}

const Dialogs: React.FC<OwnPropsType> = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogs.map(dialog => <People id={dialog.id} key={dialog.id} userName={dialog.name} />);
    let messagesElement = state.messages.map(messages => <Chat userName={props.userName} chatText={messages.message} key={messages.id} />);
    let messagesElementMe = state.messagesMe.map(messages => <ChatMy chatText={messages.message} key={messages.id}/>);

//Input Value
    const sendMessage = (values: string) => {

        if (values) {
            props.sendTextChat(values);
        }
        else {
            alert('enter your text!');
        }
    }

    const addNewMessage = (values: AddMessageFormValuesType) => {
        sendMessage(values.newMessageBody);
    }

    return (
        <div className={Class.dialogsWrap}>
            <div className={`${Class.listWrap} ${Class.wrapBoxClass}`}>
                <div className={Class.list}>
                    {dialogsElement}
                </div>
            </div>
            <div className={`${Class.chat} ${Class.wrapBoxClass}`}>
                {messagesElement}
                {messagesElementMe}
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

// We wrap the function with the validator in a variable, pass the length of the string
const maxLength100 = maxLengthCreator(100);

export type AddMessageFormValuesType = {
    newMessageBody: string;
}

type PropsType = {}

type DialogFormValuesTypeKeys = Extract<keyof AddMessageFormValuesType, string>;

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormValuesType, PropsType> & PropsType> = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={Class.sendWrap}>
            {createField<DialogFormValuesTypeKeys>("Your message", "newMessageBody", Textarea,  [requiredField, maxLength100])}


            <button className="button">Send massage</button>
        </form>
    )
}
// Wrap our component in HOC from reduxForm
const AddMessageFormRedux = reduxForm<AddMessageFormValuesType>({form: 'dialogAddMessageForm'})(AddMessageForm);


export default Dialogs;
