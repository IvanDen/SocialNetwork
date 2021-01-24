import axios from "axios/index";
import {UsersType} from '../Types/types';
import {appConfig} from '../config';


// it is dal level
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': appConfig.API_KEY
    },
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodesForCaptchaEnum {
    CaptchaIsRequired = 10,
}

export type GetUsersItems = {
    items: Array<UsersType>;
    totalCount: number;
    error: string | null;
}


export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
