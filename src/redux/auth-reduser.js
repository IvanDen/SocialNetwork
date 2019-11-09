import {AuthAPI, usersAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA ='social-network/auth/SET_USER_DATA';
const SET_CAPTCHA_URL_SUCCESS ='social-network/auth/SET_CAPTCHA_URL_SUCCESS';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: SET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

export const authUser = () => async (dispatch) => {
        let response = await AuthAPI.checkAuth();
        if (response.resultCode === 0) {
            let {id, email, login} = response.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
}


//thank creator
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    //thank
    const response = await AuthAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        //success, get auth data
        dispatch(authUser());
    }

    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async (dispatch) => {
    const response = await AuthAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

//thank creator
export const getCaptchaUrl = () => async (dispatch) => {
    //thank
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));

}





export default authReducer;