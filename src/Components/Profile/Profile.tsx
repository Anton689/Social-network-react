import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPost/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {postsDataType} from './../../App'
import {ActionsTypeProfile} from '../../redux/profileReducer';
import {ActionsTypeMessagePage} from '../../redux/messagePageReducer';


export type profilePropsType = {
    postsData: Array<postsDataType>;
    // addPost: ()=> void;
    newPostText: string;
    //changeNewPostText: (newText: string) => void;
    dispatch: (action: ActionsTypeProfile | ActionsTypeMessagePage) => void;
}

export const Profile = (props: profilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postsName={props.postsData}
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
        </div>
    )
}
