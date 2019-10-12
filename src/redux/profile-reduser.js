import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: '25'},
        {id: 2, message: 'It is my post!', likeCount: '21'},
        {id: 3, message: 'This is my post to!', likeCount: '5'}
    ],
    newPostText: 'your post!',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                newPostText: '',
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]

            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return{
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return{
                ...state,
                status: action.status
            };
        }
        default:
            return state;

    }
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({type: SET_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => {

    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
};
export const getStatus = (userId) => (dispatch) => {

    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
};
export const updateStatus = (status) => (dispatch) => {

    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }

        });
};

export default profileReducer;