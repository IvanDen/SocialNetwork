import * as axios from "axios/index";

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
    follow(userId) {

        return instance.post(`follow/${userId}`, {},
            /*{
                headers: instance.headers
            }*/
            )
            .then(response => {
                return response.data
            });
    },
    unFollow(userId) {

        return instance.delete(`follow/${userId}`,
            /*{
                headers: instance.headers
            }*/
            )
            .then(response => {
                return response.data
            });
    }
}



