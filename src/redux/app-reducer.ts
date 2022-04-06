import {Dispatch} from 'redux';
import {headerAPI} from '../API/HeaderAPI';
import {ActionsTypeAuth, authTC, setUserDataAC} from '../Components/Header/auth-reducer';
import {ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './reduxStore';

export type ActionAppType = SetInitializedType

export const setInitializedAC =()=> ({type:'SET_INITIALIZED' })  as const;

export type SetInitializedType = ReturnType<typeof setInitializedAC>

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionAppType): InitialStateType => {

    switch (action.type) {
        case 'SET_INITIALIZED':{
            return {...state, initialized: true}
        }
        default:
            return state;
    }
}

export const initializeApp = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionAppType>) => {
    let promise = dispatch(authTC())
    promise.then(()=> {
        dispatch(setInitializedAC())
    })
}

export default appReducer;