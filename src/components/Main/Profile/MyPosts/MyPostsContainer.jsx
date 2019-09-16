import React from 'react';
import {addPost, updateNewPostText} from '../../../../redux/profile-reduser';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = () => {
//
//     return <StoreContext.Consumer>
//         { store => {
//             let state = store.getState();
//
//             let addPost = () => {
//
//                 store.dispatch(addPostAction());
//             }
//
//             let onPostChange = (text) => {
//                 store.dispatch(updateNewPostTextActionCreator(text));
//             }
//
//             return <MyPosts updateNewPostTextActionCreator={onPostChange}
//                      addPost={addPost}
//                      posts={state.profilePage.posts}
//                      newPostText={state.profilePage.newPostText} />
//             }
//         }
//         </StoreContext.Consumer>
// };

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {

        addPost: () => {
            dispatch(addPostAction());
        },

        updateNewPostTextActionCreator: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}*/

const MyPostsContainer = connect(mapStateToProps,
    {addPost, updateNewPostText})(MyPosts);
export default MyPostsContainer;