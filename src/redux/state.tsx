
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
}

export type messagePageType = {
    message: Array<messagesType>;
}

export type stateType = {
    profile: profileType;
    messagePage: messagePageType;


}

export let state: stateType = {
    profile: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 15},
            {id: 2, message: 'It\'s my first post', likeCount: 20},
        ],
        dialogs: [{id: 1, name: 'Anton'},
            {id: 2, name: 'Bob'},
            {id: 3, name: 'C'},
            {id: 4, name: 'D'},
            {id: 5, name: 'E'},
            {id: 6, name: 'G'}
        ],
    },
    messagePage: {
        message: [
            {id: 1, message: 'Privet'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'How is your it-kamasutra?'},
            {id: 4, message: 'Hey'},
            {id: 5, message: 'E'},
            {id: 6, message: 'G'}
        ],
    }
}


export default state;