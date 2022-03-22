import React from 'react';
import {addPostActionCreator} from '../../../redux/profileReducer';
import {InitialStateType} from '../../../redux/messagePageReducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../redux/reduxStore';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';


export type MypostsContainerType = MapDispatchToPropsType & MapStateToPropsType

type MapStateToPropsType = {
    newPostText: InitialStateType,
    postsName: InitialStateType
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

let mapStateToProps = (state: AppStateType) /* :MapStateToPropsType*/ => {
    return {
        // newPostText: state.profilePage.newPostText,
        postsName: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }

}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
