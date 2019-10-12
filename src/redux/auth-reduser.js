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
                ...action.data,
                isAuth: true
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

export const setAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
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
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}

/*export const authUserLogin = () => {
    return (dispatch) => {
        AuthAPI.checkAuth()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id,} = response.data;
                    dispatch(setAuthLogin(id));
                }
            });
    }
}*/
export default authReducer;