import {messagePageType, messagesType} from './store';
import {ActionsTypeProfile} from './profileReducer';

const ADD_NEW_MASSAGE = 'ADD-NEW-MASSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

export type AddNewMessageCreatorType = ReturnType<typeof addNewMessageCreator>
export type ChangeNewMessageTextCreatorType = ReturnType<typeof changeNewMessageTextCreator>

export const addNewMessageCreator = () => ({type: ADD_NEW_MASSAGE}) as const;
export const changeNewMessageTextCreator = (newTextMessage: string) => ({
    type: CHANGE_NEW_MESSAGE_TEXT,
    newTextMessage: newTextMessage
}) as const;

export type ActionsTypeMessagePage =
    | AddNewMessageCreatorType
    | ChangeNewMessageTextCreatorType;

export type InitialStateType = {
    newMessageText: string;
    message: Array<messagesType>
}

let initialState: InitialStateType = {
    newMessageText: '',
    message: [
        {id: 1, message: 'Privet'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How is your it-kamasutra?'},
        {id: 4, message: 'Hey'},
        {id: 5, message: 'E'},
        {id: 6, message: 'G'}
    ],
}

//type initialStateType = typeof initialState

const dialogPageReducer = (state = initialState, action: ActionsTypeMessagePage | ActionsTypeProfile): InitialStateType => {
    switch (action.type) {
        case ADD_NEW_MASSAGE:
            const newMessage: messagesType = {
                id: 7,
                message: state.newMessageText
            }
            state.message.push(newMessage);
            state.newMessageText = '';
            return state;
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newTextMessage;
            return state;
        default:
            return state;
    }
}

export default dialogPageReducer;