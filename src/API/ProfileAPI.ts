import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'cdec8a86-dfbd-42af-bdcf-a34dd34bbfb8'
    },
});

export const profileAPI = {
    setUser(userId: number) {
        return instance.get(`profile/${userId}`)
    }
}
