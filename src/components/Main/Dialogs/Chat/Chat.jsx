import React from 'react';
import Class from './Chat.module.css';
import ownPhoto from "../../../../img/list-users.png"
import userPhoto from "../../../../img/posts-user.png"


export const Chat = (props) => {

    return (
        <div className={`${Class.message}`}>
            <div className={Class.avaWrap}>
                <img className={`${Class.avatar} ${Class.massageShadow}`} src={userPhoto} alt={"avatar"} />
                <span>{props.userName}</span>
            </div>
            <span className={`${Class.messageText} ${Class.massageShadow} `}>{props.chatText}</span>
        </div>
    );
};

export const ChatMy = (props) => {

    return (
        <div className={`${Class.message} ${Class.my}`}>
            <span className={`${Class.messageText} ${Class.my} ${Class.massageShadow}`}>{props.chatText}</span>
            <div className={Class.avaWrap}>
                <img className={`${Class.avatar} ${Class.my} ${Class.massageShadow}`} src={ownPhoto} alt={"avatar"} />
                <span>Me</span>
            </div>
        </div>
    );
};
