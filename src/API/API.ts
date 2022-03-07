import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'cdec8a86-dfbd-42af-bdcf-a34dd34bbfb8'
    },
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    following(userId:number){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    unfollowing(userId:number){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    }
}

// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
//     withCredentials: true,
//     headers: {
//         'API-KEY': 'cdec8a86-dfbd-42af-bdcf-a34dd34bbfb8'
//     }},
// )
