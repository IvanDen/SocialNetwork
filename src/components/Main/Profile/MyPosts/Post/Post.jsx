import React from 'react';
import Class from './Post.module.css';
import userPostPhoto from "../../../../../img/posts-user.png"

const Post = (props) => {

    return (
        <div className={Class.item}>
            <div className={Class.imgWrap}>
                <img src={userPostPhoto} alt="user-post"/>
            </div>
            <div className={Class.messagePanel}>
                <span>{props.message}</span>
                <div>
                    <span>Like: {props.likeCount}</span>
                    <span>Send</span>
                </div>
            </div>
        </div>
    );
}

export default Post;