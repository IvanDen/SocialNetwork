import React from 'react';
import Class from './Post.module.css';

const Post = (props) => {

    return (
        <div className={Class.item}>
            <img src={"./img/posts-user.png"} alt="user-post"/>
            <span>{props.message}</span>
            <span>Like: {props.likeCount}</span>
            <span>Send</span>
        </div>
    );
}

export default Post;