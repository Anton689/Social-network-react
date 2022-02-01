import React, {ChangeEvent} from 'react';
import {postsDataType} from '../../../App';
import {addPostActionCreator, changeNewPostText, ActionsTypeProfile} from '../../../redux/profileReducer';
import {ActionsTypeMessagePage} from '../../../redux/messagePageReducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../redux/reduxStore';
import {StoreType} from '../../../redux/store';
import StoreContext from '../../../StoreContext';


type postsPropsType = {
    postsName: Array<postsDataType>;
    //addPost: () => void;
    newPostText: string;
    //changeNewPostText: (newText: string) => void;
    dispatch: (action: ActionsTypeProfile | ActionsTypeMessagePage) => void;
}


export const MyPostsContainer = (props: postsPropsType) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onChangePost = (text: string) => {
        props.dispatch(changeNewPostText(text))
    }

    return (

                <MyPosts newPostText={props.newPostText}
                         postsName={props.postsName}
                         updateNewPostText={onChangePost}
                         addPost={addPost}/>

    )

}
