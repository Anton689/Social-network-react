import {Dispatch} from 'redux';
import {headerAPI} from '../../API/HeaderAPI';

const SET_USER_DATA = 'SET_USER_DATA';

export const setUserDataAC = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
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
                isAuth: true
            }
        default:
            return state;
    }
}

export const authTC = () => {
    return (dispatch: Dispatch) => {

        headerAPI.getUserData()
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data
                    dispatch(setUserDataAC(id, email, login));
                }
            })
    }
}

