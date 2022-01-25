import {postsType, profileType} from './store';
import {ActionsTypeMessagePage} from './messagePageReducer';

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST}) as const;
export const changeNewPostText = (newText: string) => ({type: CHANGE_NEW_POST_TEXT, newText: newText}) as const;

export type AddPostType = ReturnType<typeof addPostActionCreator>
export type ChangeNewPostTextType =  ReturnType<typeof changeNewPostText>

export type ActionsTypeProfile =
    AddPostType
    | ChangeNewPostTextType;

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
    ],
    newPostText: '',
    dialogs: [{id: 1, name: 'Anton'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'C'},
        {id: 4, name: 'D'},
        {id: 5, name: 'E'},
        {id: 6, name: 'G'}
    ],
}

const profileReducer = (state: profileType = initialState, action: ActionsTypeProfile | ActionsTypeMessagePage) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: postsType = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;