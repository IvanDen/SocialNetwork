import {AuthAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA ='social-network/auth/SET_USER_DATA';
const SET_AUTH_LOGIN ='social-network/auth/SET_AUTH_LOGIN';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            };
        }
        case SET_AUTH_LOGIN: {
            return {
                ...state,
                userId: action.userId
            };
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});
export const setAuthLogin = (userId) => ({
    type: SET_AUTH_LOGIN,
    userId
});

export const authUser = () => async (dispatch) => {
        let response = await AuthAPI.checkAuth();
        if (response.resultCode === 0) {
            let {id, email, login} = response.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
}


//thank creator
export const login = (email, password, rememberMe) => async (dispatch) => {
    //thank
    let response = await AuthAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(authUser());
    }
    else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}


export const logout = () => async (dispatch) => {
    let response = await AuthAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(authUser(null, null, null, false));
    }
}


export default authReducer;