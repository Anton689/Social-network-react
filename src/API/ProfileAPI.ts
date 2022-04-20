import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ace90cee-0ad1-4fe7-b431-a630cfb3f541'
    },
});

export const profileAPI = {
    setUser(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: any) {
        return instance.put(`profile/status`, {status})
    },
    login(data: TypeForLogin){
        return instance.post<TypeForLogin, AxiosResponse<ResponseTypeForLogin>>('auth/login', data)
    },
    logOut(){
        return instance.delete<ResponseTypeForLogin>('auth/login')
    }
}

//response type for login

export type ResponseTypeForLogin = {
    resultCode: number
    messages: string
    data: {userId: number}
}

//type for login

export type TypeForLogin ={
    email: string
    password: string
    rememberMe:boolean
    captcha?: string
}
