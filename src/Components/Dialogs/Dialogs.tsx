import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

export type DialogItemType = {
    id: number;
    name?: string;
}


function DialogItem(props: DialogItemType) {
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}> {props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    text?: string;
}

function Message(props: MessageType) {
    return (<div className={s.message}>
            {props.text}
        </div>
    )
}


export const Dialogs = (props: any) => {

    type DataDialogsType = {
        id: number;
        name?: string;
        message?: string;
    }

    let dialogsData: Array<DataDialogsType> = [{id: 1, name: 'Anton'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'C'},
        {id: 4, name: 'D'},
        {id: 5, name: 'E'},
        {id: 6, name: 'G'}
    ]

    let messageData: Array<DataDialogsType> = [
        {id: 1, message: 'Privet'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How is your it-kamasutra?'},
        {id: 4, message: 'Hey'},
        {id: 5, message: 'E'},
        {id: 6, message: 'G'}
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

            </div>
            <div className={s.messages}>
                <Message text={messageData[0].message}/>
                <Message text={messageData[1].message}/>
            </div>
        </div>
    )
}