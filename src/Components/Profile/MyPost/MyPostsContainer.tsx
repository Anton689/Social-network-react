import React from 'react';
import {addPostActionCreator, changeNewPostText} from '../../../redux/profileReducer';
import {InitialStateType} from '../../../redux/messagePageReducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../redux/reduxStore';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';


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
