import {GetUsersItems, instance, APIResponseType} from "./api";
import {FilterType} from "../redux/users-reduser";



export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10, filter: FilterType) {
		return instance.get<GetUsersItems>(`users?page=${currentPage}&count=${pageSize}&term=${filter.term ? filter.term : ""}` + (filter.friend === null ? '' : `&friend=${filter.friend}`))
			.then(response => response.data);
	},
	follow(userId: number) {

		return instance.post<APIResponseType>(`follow/${userId}`)
			.then(response => response.data);
	},
	unFollow(userId: number) {

		return instance.delete(`follow/${userId}`)
			.then(response => response.data) as Promise<APIResponseType>;
	}
}
