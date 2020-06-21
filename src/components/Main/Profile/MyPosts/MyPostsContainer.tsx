import React from 'react';
import {actions} from '../../../../redux/profile-reduser';
import MyPosts, {MyPostsDispatchPropsType, MyPostsMapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect<MyPostsMapPropsType, MyPostsDispatchPropsType, {}, AppStateType>(mapStateToProps,{
    addPost: actions.addPost
})(MyPosts);
export default MyPostsContainer;
