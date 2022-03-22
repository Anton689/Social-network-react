import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DataDialogsType} from '../../App';
import {Field, Form, Formik} from 'formik';

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
        props.sendMessage(values.message);
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
                <AddMessageForm addNewMessage={addNewMessage}/>
            </div>
        </div>
    )
}

type ValuesType = {
    message: string
}

type AddMessageFormType = {
    addNewMessage: (values:ValuesType)=> void
}

export const AddMessageForm = (props: AddMessageFormType) => {

    const onSubmitHandler = (values: ValuesType) => {
        props.addNewMessage(values)
    }

    return (
        <Formik
            initialValues={{message: ''}}
            onSubmit={onSubmitHandler}
        >
            <Form>
                <Field name="message" as="textarea"/>
                <button type="submit">
                    Add
                </button>
            </Form>
        </Formik>
    )
}