import {messagePageType, messagesType} from './state';
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

const dialogPageReducer = (state: messagePageType, action: ActionsTypeMessagePage | ActionsTypeProfile) => {
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