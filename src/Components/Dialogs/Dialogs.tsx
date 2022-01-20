import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DataDialogsType} from '../../App';
import {stateType} from '../../redux/state';

type dialogsPropsType = {
    message: Array<DataDialogsType>
    dialogs: Array<DataDialogsType>
    //state: stateType;
    addNewMessage: () => void;
    changeNewMessageText: (newText: string) => void;

}


export const Dialogs = (props: dialogsPropsType) => {

    let messagesElement = props.message.map(message => <Message text={message.message}/>)
    let dialogsElements = props.dialogs.map(dialogs => <DialogItem name={dialogs.name}
                                                                   id={dialogs.id}/>)

    const onClickHandler = () => {
        props.addNewMessage();
    }

    const newTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageText(e.currentTarget.value);
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
                <textarea onChange={newTextAreaHandler}/>
            </div>
            <div>
                <button onClick={onClickHandler}>add</button>
            </div>
        </div>
    )
}