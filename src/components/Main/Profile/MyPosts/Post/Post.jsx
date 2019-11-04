import React from 'react';
import Class from './Post.module.css';

const Post = (props) => {

    return (
        <div className={Class.item}>
            <div className={Class.imgWrap}>
                <img src={"./img/posts-user.png"} alt="user-post"/>
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