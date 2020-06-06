import {instance, APIResponseType, ResultCodesEnum, ResultCodesForCaptchaEnum} from "./api";

export type CheckAuthDataType = {
	id: number
	email: string
	login: string
}

export type LoginResponseDataType = {
	userId: number,
}

export const AuthAPI = {
	checkAuth() {
		return instance.get<APIResponseType<CheckAuthDataType>>(`auth/me`,)
			.then(response => {
				return response.data
			});
	},
	login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
		return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodesForCaptchaEnum>>(`auth/login`, {
			email,
			password,
			rememberMe,
			captcha
		}).then(res => res.data);
	},
	logout() {
		return instance.delete(`auth/login`);
	},
}
