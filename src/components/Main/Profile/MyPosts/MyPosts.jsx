import React, {PureComponent} from 'react';
import Class from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators";
import {createField, Textarea} from "../../../Common/FormsControls/FormsControls";


// Create a separate component for the form
const maxLength10 = maxLengthCreator(30);
let AddNewPostForm = (props) => {

    return(
        <form className={Class.postForm} onSubmit={props.handleSubmit}>
                {createField("Post message", "newPostText", Textarea, [requiredField, maxLength10])}
            <button>Add post</button>
        </form>
    );
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo(props => {

    /*shouldComponentUpdate (nextProps, nextState) {
        //If class Component if props and stein have not changed, then do not update the component.
        //PureComponent - the component that itself does this check.
        return nextProps != this.props || nextState != this.state;
    }*/


    let newPostElement = React.createRef();

    let onAddPost = (values) => {

        props.addPost(values.newPostText);
    };

    //render post from state
    let postElement =
        [...props.posts]
            .reverse()
            .map( post => <Post message={post.message} key={post.id} likeCount={post.likeCount}/> );

    return (
        <div className={Class.postsFeed}>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={Class.posts}>
                {postElement}
            </div>
        </div>
    );
});


export default MyPosts;