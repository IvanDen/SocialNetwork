import React from 'react';
import Class from './Dialogs.module.css';
import People from "./People/People";
import {Chat, ChatMy} from "./Chat/Chat";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement =
        state.dialogs.map(dialog => <People id={dialog.id} key={dialog.id} userName={dialog.name} />);
    let messagesElement =
        state.messages.map(messages => <Chat id={messages.id} chatText={messages.message} key={messages.id} />);
    let messagesElementMe =
        state.messagesMe.map(messages => <ChatMy profile={props.profile} chatText={messages.message} key={messages.id}/>);

//Input Value
    let newMessageElement = React.createRef();

    let sendMessage = (values) => {

        if (values) {
            props.sendTextChat(values);
        }
        else {
            alert('enter your text!');
        }
    }


    let addNewMessage = (values) => {
        console.log(values.newMessageBody);

        sendMessage(values.newMessageBody);
    }

    return (
        <div className={Class.dialogsWrap}>
            <div className={Class.listWrap}>
                <h1>DIALOGS</h1>
                <div className={Class.list}>
                    {dialogsElement}
                </div>
            </div>
            <div className={Class.chat}>
                {messagesElement}
                {messagesElementMe}
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

// We wrap the function with the validator in a variable, pass the length of the string
const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={Class.sendWrap}>
            <Field
                component={Textarea}
                name="newMessageBody"
                placeholder={"your message"}
                validate={[requiredField, maxLength50]}
                value={props.newChatText}/>

            <button className="button">Send massage</button>
        </form>
    )
}
// Wrap our component in HOC from reduxForm
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);


export default Dialogs;