import React from 'react';

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
    profile: profileType;
    messagePage: messagePageType;


}

export type AddPostType = ReturnType<typeof addPostActionCreator>
export type ChangeNewPostTextType =  ReturnType<typeof changeNewPostText>
export type AddNewMessageCreatorType = ReturnType<typeof addNewMessageCreator>
export type ChangeNewMessageTextCreatorType = ReturnType<typeof changeNewMessageTextCreator>


export type ActionsType = AddPostType | ChangeNewPostTextType | AddNewMessageCreatorType | ChangeNewMessageTextCreatorType;

export type StoreType = {
    _state: stateType
    renderEntireTree: () => void
    subscribe: (observer: () => void) => void
    //addPost: () => void
    //changeNewPostText: (newText: string) => void
    // addNewMessage: () => void
    // changeNewMessageText: (newText: string) => void
    getState: () => stateType
    dispatch: (action: ActionsType) => void;

}


export let store: StoreType = {
    _state: {
        profile: {
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
        messagePage: {
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
        if (action.type === 'ADD-POST') {
            const newPost: postsType = {
                id: 5,
                message: this._state.profile.newPostText,
                likeCount: 0,
            };
            this._state.profile.posts.push(newPost);
            this._state.profile.newPostText = '';
            this.renderEntireTree();
        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {

            this._state.profile.newPostText = action.newText;
            this.renderEntireTree();

        }else if (action.type === 'ADD-NEW-MASSAGE'){
            const newMessage: messagesType = {
                id: 7,
                message: this._state.messagePage.newMessageText
            }
            this._state.messagePage.message.push(newMessage);
            this._state.messagePage.newMessageText = '';
            this.renderEntireTree();

        }else if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
            this._state.messagePage.newMessageText = action.newTextMessage;
            this.renderEntireTree();
        }
    },
    // addNewMessage() {
    //     const newMessage: messagesType = {
    //         id: 7,
    //         message: this._state.messagePage.newMessageText
    //     }
    //     this._state.messagePage.message.push(newMessage);
    //     this._state.messagePage.newMessageText = '';
    //     this.renderEntireTree();
    // },
    // changeNewMessageText(newText: string) {
    //     this._state.messagePage.newMessageText = newText;
    //     this.renderEntireTree();
    // }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const;
export const changeNewPostText = (newText: string) => ({type: 'CHANGE-NEW-POST-TEXT', newText: newText}) as const;
export const addNewMessageCreator =()=> ({type: 'ADD-NEW-MASSAGE'}) as const;
export const changeNewMessageTextCreator =(newTextMessage: string)=> ({type: 'CHANGE-NEW-MESSAGE-TEXT', newTextMessage: newTextMessage}) as const;
