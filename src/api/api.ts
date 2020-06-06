import axios from "axios/index";
import {UsersType} from '../Types/types';

// it is dal level
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ef3749fc-291d-4d38-9a5b-8971e825c8f4'
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
