import {Dispatch} from 'redux';
import {headerAPI} from '../../API/HeaderAPI';
import {profileAPI, TypeForLogin} from '../../API/ProfileAPI';
import {ThunkDispatch} from 'redux-thunk';
import {AppStateType} from '../../redux/reduxStore';

const SET_USER_DATA = 'SET_USER_DATA';

export const setUserDataAC = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
}) as const;

// id: number, email: string, login: string

export type SetUserDataACType = ReturnType<typeof setUserDataAC>

export type ActionsTypeAuth = SetUserDataACType


export type initialStateType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

let initialState: initialStateType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsTypeAuth): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const authTC = () => (dispatch: Dispatch) => {
    headerAPI.getUserData()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setUserDataAC(id, email, login, true));
            }
        })
}

export const login = (data: TypeForLogin, setStatus: any) => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypeAuth>) => {
    profileAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(authTC())
            } else {
                setStatus(res.data.messages)
            }
        })
}

export const logout = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypeAuth>) => {
    profileAPI.logOut()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserDataAC(0, '', '', false))
                debugger
            }
        })
}

