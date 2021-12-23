import React from 'react';
import s from './../Dialogs.module.css';



export type MessageType = {
    text?: string;
}

function Message(props: MessageType) {
    return (<div className={s.message}>
            {props.text}
        </div>
    )
}

export default Message;

