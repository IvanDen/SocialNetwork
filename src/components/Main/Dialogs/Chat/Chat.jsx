import React from 'react';
import Class from './Chat.module.css';


export const Chat = (props) => {

    return (
        <div className={Class.message}>
            <div className={Class.avaWrap}>
                <img className={Class.avatar} src={"./img/posts-user.png"} alt={"avatar"} />
                <span>{props.userName}</span>
            </div>
            <span className={Class.messageText}>{props.chatText}</span>
        </div>
    );
};

export const ChatMy = (props) => {
    return (
        <div className={`${Class.message} ${Class.my}`}>
            <span className={`${Class.messageText} ${Class.my}`}>{props.chatText}</span>
            <div className={Class.avaWrap}>
                <img className={`${Class.avatar}  ${Class.my}`} src={"./img/myAvatar.png"} alt={"avatar"} />
                <span>Me</span>
            </div>
        </div>
    );
};

// export default Chat;
// export default ChatMy;