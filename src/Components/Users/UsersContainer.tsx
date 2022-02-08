import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {AppStateType} from '../../redux/reduxStore';
import {AllActionsType, followAC, InitialStateType, setUsersAC, unfollowAC, UsersType} from '../../redux/usersReducer';
import {Dispatch} from 'redux';

export type MapStateToPropsType = {
    users: InitialStateType
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (newUsers: UsersType[]) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (newUsers: UsersType[]) => {
            dispatch(setUsersAC(newUsers))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

