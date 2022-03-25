import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DataDialogsType} from '../../App';
import {Form, ValuesType} from '../../Forms/Form';

type dialogsPropsType = {
    message: Array<DataDialogsType>
    dialogs: Array<DataDialogsType>
    sendMessage: (message: string) => void
    isAuth: boolean

}


export const Dialogs = (props: dialogsPropsType) => {


    let messagesElement = props.message.map(message => <Message key={message.id} text={message.message}/>)
    let dialogsElements = props.dialogs.map(dialogs => <DialogItem key={dialogs.id} name={dialogs.name}
                                                                   id={dialogs.id}/>)


    const addNewMessage = (values: ValuesType) => {
        props.sendMessage(values.newText as string);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>

            <div>
                <Form callback={addNewMessage} removeButton={true}/>
            </div>
        </div>
    )
}

