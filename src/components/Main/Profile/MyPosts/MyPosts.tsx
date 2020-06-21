import React, {PureComponent} from 'react';
import Class from './MyPosts.module.css';
import Post from "./Post/Post";
import { AddNewPostFormRedux, NewPostFormValuesType } from './AddNewPost/AddNewPost';
import { PostsType } from '../../../../Types/types';

export type MyPostsMapPropsType = {
    posts: PostsType[];
}
export type MyPostsDispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MyPostsMapPropsType & MyPostsDispatchPropsType> = (props) => {

    /*shouldComponentUpdate (nextProps, nextState) {
        //If class Component if props and stein have not changed, then do not update the component.
        //PureComponent - the component that itself does this check.
        return nextProps != this.props || nextState != this.state;
    }*/


    let onAddPost = (values: NewPostFormValuesType) => {

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
}

const MyPostsMemorized = React.memo(MyPosts);


export default MyPostsMemorized;
