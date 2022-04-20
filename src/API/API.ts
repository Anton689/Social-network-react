import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ace90cee-0ad1-4fe7-b431-a630cfb3f541'
    },
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    following(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    unfollowing(userId: number) {
        return instance.post(`follow/${userId}`)
    }
}

// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
//     withCredentials: true,
//     headers: {
//         'API-KEY': 'cdec8a86-dfbd-42af-bdcf-a34dd34bbfb8'
//     }},
// )
