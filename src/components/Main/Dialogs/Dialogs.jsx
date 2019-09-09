import React from 'react';
import Class from './Dialogs.module.css';
import People from "./People/People";
import {Chat, ChatMy} from "./Chat/Chat";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement =
        state.dialogs.map(dialog => <People id={dialog.id} key={dialog.id} userName={dialog.name} />);
    let messagesElement =
        state.messages.map(messages => <Chat id={messages.id} chatText={messages.message} key={messages.id} />);
    let messagesElementMe =
        state.messagesMe.map(messages => <ChatMy chatText={messages.message} key={messages.id}/>);

//Input Value
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        if (text) {
            props.sendTextChat();
        }
        else {
            alert('enter your text!');
        }
    }
//We control the entered text in the state
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewChatText(text);
    };

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
                <div className={Class.sendWrap}>
                    <textarea
                        ref={newMessageElement}
                        onChange={onMessageChange}
                        placeholder={"your message"}
                        value={state.newChatText} />
                    <button className="button" onClick={sendMessage}>Send massage</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;