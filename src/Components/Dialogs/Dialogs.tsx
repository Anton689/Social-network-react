import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    id: string;
    name: string;
}


function DialogItem(props: DialogItemType) {
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}> {props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    text: string;
}

function Message(props: MessageType) {
    return (<div className={s.message}>
            {props.text}
        </div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="A" id="1"/>
                <DialogItem name="B" id="2"/>
                <DialogItem name="C" id="3"/>
                <DialogItem name="D" id="4"/>
                <DialogItem name="E" id="5"/>
            </div>
            <div className={s.messages}>
                <Message text="Hi"/>
                <Message text="HEllo"/>
                <Message text="Bonj"/>
                <Message text="Aloha"/>

            </div>
        </div>
    )
}