import {AuthAPI, usersAPI} from "../api/api";
import {setToggleIsFetching, setUsers, setUsersTotalCount} from "./users-reduser";
import * as axios from "axios/index";

const SET_USER_DATA ='SET_USER_DATA';


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
        default:
            return state;

    }
}

export const setAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
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

export default authReducer;