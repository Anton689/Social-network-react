import React from 'react';
import s from './../Dialogs.module.css';


export type MessageType = {
    text?: string;
}


function Message(props: MessageType) {

    const newTextArea: any = React.createRef();

    const onClickHandler = () => {
        let text = newTextArea.current.value;
        alert(text)
    }

    return (<div className={s.message}>
            {props.text}
            <textarea ref={newTextArea}></textarea>
            <div>
                <button onClick={onClickHandler}>add</button>
            </div>
        </div>
    )
}

export default Message;

