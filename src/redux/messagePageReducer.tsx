import {messagesType} from './store';
import {ActionsTypeProfile} from './profileReducer';

const ADD_NEW_MASSAGE = 'ADD-NEW-MASSAGE';

export type AddNewMessageCreatorType = ReturnType<typeof addNewMessageCreator>

export const addNewMessageCreator = (message: string) => ({type: ADD_NEW_MASSAGE, message}) as const;

export type ActionsTypeMessagePage =
    | AddNewMessageCreatorType


export type InitialStateType = {
    message: Array<messagesType>
}

let initialState: InitialStateType = {
    message: [
        {id: 1, message: 'Privet'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How is your it-kamasutra?'},
        {id: 4, message: 'Hey'},
        {id: 5, message: 'E'},
        {id: 6, message: 'G'}
    ],
}

const dialogPageReducer = (state = initialState, action: ActionsTypeMessagePage | ActionsTypeProfile): InitialStateType => {

    switch (action.type) {
        case ADD_NEW_MASSAGE:
            let newMessageText = action.message;
            return {
                ...state,
                message: [...state.message, {id: 7, message: newMessageText}]
            }
        default:
            return state;
    }
}

export default dialogPageReducer;