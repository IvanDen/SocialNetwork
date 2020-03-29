import {AuthAPI, usersAPI, securityAPI, ResultCodesEnum, ResultCodesForCaptcha} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA ='social-network/auth/SET_USER_DATA';
const SET_CAPTCHA_URL_SUCCESS ='social-network/auth/SET_CAPTCHA_URL_SUCCESS';

export interface InitialStateType2 {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}

let initialState: InitialStateType2 = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null as string | null // if null, then captcha is not required
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType2 => {

    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
                userId22: "asdasd"
            }
        default:
            return state;
    }
}

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

type GetCaptchaUrlSuccessActionType = {
    type: typeof SET_CAPTCHA_URL_SUCCESS
    payload: {captchaUrl: string}
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: SET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

export const authUser = () => async (dispatch: any) => {
        let authData = await AuthAPI.checkAuth();
        if (authData.resultCode === ResultCodesEnum.Success) {
            let {id, email, login} = authData.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
}


//thank creator


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    //thank
    const loginData = await AuthAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodesEnum.Success) {
        //success, get auth data
        dispatch(authUser());
    }

    else {
        if (loginData.resultCode === ResultCodesForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async (dispatch: any) => {
    const response = await AuthAPI.logout();
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

//thank creator
export const getCaptchaUrl = () => async (dispatch: any) => {
    //thank
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));

}





export default authReducer;
