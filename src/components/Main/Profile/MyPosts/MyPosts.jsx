import React from 'react';
import Class from './MyPosts.module.css';
import Post from "./Post/Post";
// import {updateNewPostText} from "../../../../redux/profile-reduser";
import {Field, reduxForm} from "redux-form";


// Create a separate component for the form
let AddNewPostForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <Field
                name="newPostText"
                component="textarea" />
            <button>Add post</button>
        </form>
    );
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = (values) => {

        props.addPost(values.newPostText);
    };

    //render post from state
    let postElement =
        props.posts.map( post => <Post message={post.message} key={post.id} likeCount={post.likeCount}/> );

    return (
        <div>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={Class.posts}>
                {postElement}
            </div>
        </div>
    );
};


export default MyPosts;