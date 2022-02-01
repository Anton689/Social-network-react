import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DataDialogsType} from '../../App';
import {
    ActionsTypeMessagePage,
    addNewMessageCreator,
    changeNewMessageTextCreator
} from '../../redux/messagePageReducer';
import {ActionsTypeProfile} from '../../redux/profileReducer';
import {Dialogs} from './Dialogs';
import {AppStateType} from '../../redux/reduxStore';
import {StoreType} from '../../redux/store';

type dialogsPropsType = {
    message: Array<DataDialogsType>
    dialogs: Array<DataDialogsType>
    //state: stateType;
    // addNewMessage: () => void;
    // changeNewMessageText: (newText: string) => void;
    dispatch: (action: ActionsTypeProfile | ActionsTypeMessagePage) => void;


}


export const DialogsContainer = (props: dialogsPropsType) => {

    const onClickHandler = () => {
        props.dispatch(addNewMessageCreator());
    }

    const newTextAreaHandler = (body: string) => {
        props.dispatch(changeNewMessageTextCreator(body));

    }
    return <Dialogs dialogs={props.dialogs}
                    message={props.message}
                    changeNewMessageTextBody={newTextAreaHandler}
                    sendMessage={onClickHandler}/>

}