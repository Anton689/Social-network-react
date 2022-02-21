import {ActionsTypeMessagePage} from './messagePageReducer';

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const addPostActionCreator = () => ({type: ADD_POST}) as const;
export const changeNewPostText = (newText: string) => ({type: CHANGE_NEW_POST_TEXT, newText: newText}) as const;
export const setUserProfile = (profile: number) => ({type: SET_USER_PROFILE, profile}) as const;

export type AddPostType = ReturnType<typeof addPostActionCreator>
export type ChangeNewPostTextType = ReturnType<typeof changeNewPostText>
export type SetUserProfileType = ReturnType<typeof setUserProfile>

export type ActionsTypeProfile =
    AddPostType
    | ChangeNewPostTextType | SetUserProfileType;

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
    newPostText: string
    dialogs: Array<DialogsType>
    profile: any
    fullName: string
}

let initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
    ],
    newPostText: '',
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
}


const profileReducer = (state = initialState, action: ActionsTypeProfile | ActionsTypeMessagePage): initialStateType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }
}

export default profileReducer;