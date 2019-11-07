import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO = 'SAVE_PHOTO';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: '25'},
        {id: 2, message: 'It is my post!', likeCount: '21'},
        {id: 3, message: 'This is my post to!', likeCount: '5'}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                newPostText: '',
                message: action.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]

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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        }
        case SAVE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }
        default:
            return state;

    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({type: SET_STATUS, status });
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
// await asynchronous function
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        // We dispatch thank to get updated user data.
        dispatch(getUserProfile(userId));
    }
    else {

        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;