import React from 'react';
import {addNewMessageCreator, InitialStateType} from '../../redux/messagePageReducer';
import {Dialogs} from './Dialogs';
import {AppStateType} from '../../redux/reduxStore';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';


export type MapStateToPropsType = {
    dialogs: InitialStateType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    sendMessage: (message: string) => void
}

let mapStateToProps = (state: AppStateType)/*:MapStateToPropsType*/ => {
    return {
        dialogs: state.profilePage.dialogs,
        message: state.dialogsPage.message,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (message: string) => {
            dispatch(addNewMessageCreator(message))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

