import {ResultCodesEnum, ResultCodesForCaptchaEnum} from "../api/api";
import {Action} from 'redux';
import {stopSubmit, FormAction} from "redux-form";
import {usersAPI} from "../api/users-api";
import {AuthAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";


let initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null // if null, then captcha is not required
};
type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/auth/SET_USER_DATA':
        case 'SN/auth/SET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SN/auth/SET_USER_DATA',  payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'SN/auth/SET_CAPTCHA_URL_SUCCESS',
        payload: {captchaUrl}
    })
}

export const authUser = (): ThunkType => async (dispatch) => {
        let authData = await AuthAPI.checkAuth();
        if (authData.resultCode === ResultCodesEnum.Success) {
            let {id, email, login} = authData.data;
            dispatch(actions.setAuthUserData(id, email, login, true));
        }
}

//thank creator

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    //thank
    const loginData = await AuthAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodesEnum.Success) {
        //success, get auth data
        await dispatch(authUser());
    }
    else {
        if (loginData.resultCode === ResultCodesForCaptchaEnum.CaptchaIsRequired) {
            await dispatch(getCaptchaUrl());
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
        await dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    const response = await AuthAPI.logout();
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}

//thank creator
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    //thank
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));

}
export default authReducer;
