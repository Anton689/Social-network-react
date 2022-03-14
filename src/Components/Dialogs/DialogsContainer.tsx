import React, {ChangeEvent} from 'react';
import {
    ActionsTypeMessagePage,
    addNewMessageCreator,
    changeNewMessageTextCreator, InitialStateType
} from '../../redux/messagePageReducer';
import {Dialogs} from './Dialogs';
import {AppStateType} from '../../redux/reduxStore';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

//type dialogsPropsType = {
    //message: Array<DataDialogsType>
    //dialogs: Array<DataDialogsType>
    //state: stateType;
    // addNewMessage: () => void;
    // changeNewMessageText: (newText: string) => void;
    //dispatch: (action: ActionsTypeProfile | ActionsTypeMessagePage) => void;

// export const DialogsContainer = (props: dialogsPropsType) => {
//
//     const onClickHandler = () => {
//         props.dispatch(addNewMessageCreator());
//     }
//
//     const newTextAreaHandler = (body: string) => {
//         props.dispatch(changeNewMessageTextCreator(body));
//
//     }
//     return <Dialogs dialogs={props.dialogs}
//                     message={props.message}
//                     changeNewMessageTextBody={newTextAreaHandler}
//                     sendMessage={onClickHandler}/>
//
// }


export type MapStateToPropsType = {
    dialogs:InitialStateType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    changeNewMessageTextBody: (body: string)=> void
    sendMessage: ()=> void
}

let mapStateToProps = (state: AppStateType)/*:MapStateToPropsType*/ => {
    return {
        dialogs: state.profilePage.dialogs,
        message: state.dialogsPage.message,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        changeNewMessageTextBody: (body:string) => {
            dispatch(changeNewMessageTextCreator(body))
        },
        sendMessage: () => {
            dispatch(addNewMessageCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)