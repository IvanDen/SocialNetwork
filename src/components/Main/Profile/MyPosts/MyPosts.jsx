import React from 'react';
import Class from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {

        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;

        props.updateNewPostTextActionCreator(text);
    };

    //render post from state
    let postElement =
        props.posts.map( post => <Post message={post.message} key={post.id} likeCount={post.likeCount}/> );

    return (
        <div>
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    placeholder={"your post"}
                    value={props.newPostText} />
                <button className={"button"} onClick={onAddPost}>Add post</button>
            </div>
            <div className={Class.posts}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;