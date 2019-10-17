import React from 'react';
import Class from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators";
import {Textarea} from "../../../Common/FormsControls/FormsControls";


// Create a separate component for the form
const maxLength10 = maxLengthCreator(30);
let AddNewPostForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <Field
                name="newPostText"
                component={Textarea}
                placeholder={"Post message"}
                validate={[requiredField, maxLength10]} />
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