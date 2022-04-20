import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/',
    headers: {
        'API-KEY': 'ace90cee-0ad1-4fe7-b431-a630cfb3f541'
    },
});

export const headerAPI = {
    getUserData() {
        return instance.get('me')
    }
}

