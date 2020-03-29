import axios from "axios/index";
import {ProfileType} from "../Types/types";
import {constants} from "os";

// it is dal level
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ef3749fc-291d-4d38-9a5b-8971e825c8f4'
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}
        &count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId: number) {

        return instance.post(`follow/${userId}`,
        )
            .then(response => {
                return response.data
            });
    },
    unFollow(userId: number) {

        return instance.delete(`follow/${userId}`,)
            .then(response => {
                return response.data
            });
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please use profileAPI0');
        return profileAPI.getProfile(userId);

    }
}
export const profileAPI = {

    getProfile(userId: number) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile);
    }
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodesForCaptcha {
    CaptchaIsRequired = 10,
}

type CheckAuthType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number,
    }
    resultCode: ResultCodesEnum | ResultCodesForCaptcha
    messages: Array<string>
}

export const AuthAPI = {
    checkAuth() {
        return instance.get<CheckAuthType>(`auth/me`,)
            .then(response => {
                return response.data
            });
    },
    login(email: string, password: string, rememberMe = false,  captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data);

    },
    logout() {
        return instance.delete(`auth/login`);
    },
}


export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}



