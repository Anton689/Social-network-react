import {postsType, profileType} from './store';
import {ActionsTypeMessagePage} from './messagePageReducer';

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST}) as const;
export const changeNewPostText = (newText: string) => ({type: CHANGE_NEW_POST_TEXT, newText: newText}) as const;

export type AddPostType = ReturnType<typeof addPostActionCreator>
export type ChangeNewPostTextType = ReturnType<typeof changeNewPostText>

export type ActionsTypeProfile =
    AddPostType
    | ChangeNewPostTextType;

export type PostsType = {
    id: number;
    message: string;
    likeCount: number;
}
export type DialogsType = {
    id: number;
    name: string;
}

type initialStateType = {
    posts: Array<PostsType>
    newPostText: string
    dialogs: Array<DialogsType>
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
}

//type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypeProfile | ActionsTypeMessagePage): initialStateType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: postsType = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            };
            let copyState = {...state}
            copyState.posts = [...state.posts];
            copyState.posts.push(newPost);
            copyState.newPostText = '';
            return copyState;
        case CHANGE_NEW_POST_TEXT:
            let copyState2 = {...state}
            copyState2.newPostText = action.newText;
            return copyState2;
        default:
            return state;
    }
}

export default profileReducer;