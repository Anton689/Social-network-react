import {ActionsTypeMessagePage} from './messagePageReducer';
import {Dispatch} from 'redux';
import {profileAPI} from '../API/ProfileAPI';

const ADD_POST = 'ADD-POST';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText}) as const;
export const setUserProfile = (profile: number) => ({type: SET_USER_PROFILE, profile}) as const;
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const;

export type AddPostType = ReturnType<typeof addPostActionCreator>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type SetStatusType = ReturnType<typeof setStatus>

export type ActionsTypeProfile =
    AddPostType
    | SetUserProfileType
    | SetStatusType;

type PostsType = {
    id: number;
    message: string;
    likeCount: number;
}
export type DialogsType = {
    id: number;
    name: string;
}

export type initialStateType = {
    posts: Array<PostsType>
    dialogs: Array<DialogsType>
    profile: any
    fullName: string
    status: string
}

let initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
    ],
    dialogs: [
        {id: 1, name: 'Anton'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'C'},
        {id: 4, name: 'D'},
        {id: 5, name: 'E'},
        {id: 6, name: 'G'}
    ],
    profile: null,
    fullName: '',
    status: ''
}


const profileReducer = (state = initialState, action: ActionsTypeProfile | ActionsTypeMessagePage): initialStateType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: action.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
}

export const setUserProfileTc = (userId: number) => {
    return (dispatch: Dispatch) => {

        profileAPI.setUser(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const setStatusTC = (userId: number) => {
    return (dispatch: Dispatch) => {

        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {

        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(setStatus(status))
                }
            })
    }
}


export default profileReducer;