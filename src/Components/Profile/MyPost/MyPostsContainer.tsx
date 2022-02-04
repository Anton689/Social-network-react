import React, {ChangeEvent} from 'react';
import {postsDataType} from '../../../App';
import {addPostActionCreator, changeNewPostText, ActionsTypeProfile} from '../../../redux/profileReducer';
import {
    ActionsTypeMessagePage,
    addNewMessageCreator,
    changeNewMessageTextCreator, InitialStateType
} from '../../../redux/messagePageReducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../redux/reduxStore';
import {StoreType} from '../../../redux/store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Dialogs} from '../../Dialogs/Dialogs';


// type postsPropsType = {
//     postsName: Array<postsDataType>;
//     //addPost: () => void;
//     newPostText: string;
//     //changeNewPostText: (newText: string) => void;
//     dispatch: (action: ActionsTypeProfile | ActionsTypeMessagePage) => void;
// }


// export const MyPostsContainer = (props: postsPropsType) => {
//
//     const addPost = () => {
//         props.dispatch(addPostActionCreator())
//     }
//     const onChangePost = (text: string) => {
//         props.dispatch(changeNewPostText(text))
//     }
//
//     return (
//
//                 <MyPosts newPostText={props.newPostText}
//                          postsName={props.postsName}
//                          updateNewPostText={onChangePost}
//                          addPost={addPost}/>
//
//     )
//
// }

export type MypostsContainerType = MapDispatchToPropsType & MapStateToPropsType

type MapStateToPropsType = {
    newPostText: InitialStateType,
    postsName: InitialStateType
}
type MapDispatchToPropsType = {
    updateNewPostText:(text:string)=>void
    addPost: ()=>void
}

let mapStateToProps = (state: AppStateType) /* :MapStateToPropsType*/ => {
    return {
        newPostText: state.profilePage.newPostText,
        postsName: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string)=> {
            dispatch(changeNewPostText(text))
        },
        addPost: ()=> {
            dispatch(addPostActionCreator())
        }
    }

}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
