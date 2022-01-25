import React from 'react';
import profileReducer, {ActionsTypeProfile} from './profileReducer';
import dialogPageReducer, {ActionsTypeMessagePage} from './messagePageReducer';
import sidebarReducer from './sidebarReducer';

export type messagesType = {
    id: number;
    message: string;
}

export type dialogsType = {
    id: number;
    name: string;

}

export type postsType = {
    id: number;
    message: string;
    likeCount: number;
}

export type profileType = {
    posts: Array<postsType>;
    dialogs: Array<dialogsType>;
    newPostText: string;
}

export type messagePageType = {
    message: Array<messagesType>;
    newMessageText: string;

}

export type stateType = {
    profilePage: profileType;
    dialogsPage: messagePageType;
    sidebar: any


}

export type StoreType = {
    _state: stateType
    renderEntireTree: () => void
    subscribe: (observer: () => void) => void
    //addPost: () => void
    //changeNewPostText: (newText: string) => void
    // addNewMessage: () => void
    // changeNewMessageText: (newText: string) => void
    getState: () => stateType
    dispatch: (action: ActionsTypeProfile | ActionsTypeMessagePage) => void;
}

export let store: StoreType = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            newMessageText: '',
            message: [
                {id: 1, message: 'Privet'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'How is your it-kamasutra?'},
                {id: 4, message: 'Hey'},
                {id: 5, message: 'E'},
                {id: 6, message: 'G'}
            ],

        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    renderEntireTree() {
        console.log('State changed');
    },
    subscribe(observer) {
        this.renderEntireTree = observer;
    },
    dispatch(action) {


        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogPageReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this.renderEntireTree();
    },

}

