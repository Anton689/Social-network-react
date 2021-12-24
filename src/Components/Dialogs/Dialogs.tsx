import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DataDialogsType} from '../../App';
import {stateType} from '../../redux/state';

type dialogsPropsType = {
    message:Array<DataDialogsType>
    dialogs:Array<DataDialogsType>
    //state: stateType;
}


export const Dialogs = (props: dialogsPropsType) => {

    let messagesElement = props.message.map(message => <Message text={message.message}/>)
    let dialogsElements = props.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}