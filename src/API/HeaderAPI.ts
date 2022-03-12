import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/',
    headers: {
        'API-KEY': 'cdec8a86-dfbd-42af-bdcf-a34dd34bbfb8'
    },
});

export const headerAPI = {
    getUserData() {
        return instance.get('me')
    }
}

