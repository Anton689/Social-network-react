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
import { Navigate } from 'react-router-dom';

type dialogsPropsType = {
    message: Array<DataDialogsType>
    dialogs: Array<DataDialogsType>
    //state: stateType;
    // addNewMessage: () => void;
    // changeNewMessageText: (newText: string) => void;
    //dispatch: (action: ActionsTypeProfile | ActionsTypeMessagePage) => void;
    changeNewMessageTextBody: (body: string) => void
    sendMessage:()=> void
    isAuth: boolean

}


export const Dialogs = (props: dialogsPropsType) => {


    let messagesElement = props.message.map(message => <Message key={message.id} text={message.message}/>)
    let dialogsElements = props.dialogs.map(dialogs => <DialogItem key={dialogs.id} name={dialogs.name}
                                                                   id={dialogs.id}/>)

    const onClickHandler = () => {
        props.sendMessage();
    }

    const newTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageTextBody(e.currentTarget.value)
        //props.dispatch(changeNewMessageTextCreator(e.currentTarget.value));

    }

    if(!props.isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>

            <div>
                <textarea placeholder="Enter your message" onChange={newTextAreaHandler}/>
            </div>
            <div>
                <button onClick={onClickHandler}>add</button>
            </div>
        </div>
    )
}