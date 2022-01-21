import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DataDialogsType} from '../../App';
import {ActionsType, addNewMessageCreator, changeNewMessageTextCreator, stateType, StoreType} from '../../redux/state';

type dialogsPropsType = {
    message: Array<DataDialogsType>
    dialogs: Array<DataDialogsType>
    //state: stateType;
    // addNewMessage: () => void;
    // changeNewMessageText: (newText: string) => void;
    dispatch: (action: ActionsType) => void;

}


export const Dialogs = (props: dialogsPropsType) => {

    let messagesElement = props.message.map(message => <Message text={message.message}/>)
    let dialogsElements = props.dialogs.map(dialogs => <DialogItem name={dialogs.name}
                                                                   id={dialogs.id}/>)

    const onClickHandler = () => {
        props.dispatch(addNewMessageCreator());
    }

    const newTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageTextCreator(e.currentTarget.value));

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
                <textarea placeholder='Enter your message' onChange={newTextAreaHandler}/>
            </div>
            <div>
                <button onClick={onClickHandler}>add</button>
            </div>
        </div>
    )
}