import {AuthAPI, usersAPI} from "../api/api";
import {setToggleIsFetching, setUsers, setUsersTotalCount} from "./users-reduser";
import * as axios from "axios/index";

const SET_USER_DATA ='SET_USER_DATA';
const SET_AUTH_LOGIN ='SET_AUTH_LOGIN';


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

export const authUser = () => {
    return (dispatch) => {
        AuthAPI.checkAuth()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
    }
}

//thank creator
export const login = (email, password, rememberMe) => (dispatch) => {
    //thank
    AuthAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(authUser());
            }
        });
}


export const logout = () => (dispatch) => {
    AuthAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(authUser(null, null, null, false));
            }
        });
}


export default authReducer;