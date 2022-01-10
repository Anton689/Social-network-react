import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPost/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {postsDataType} from './../../App'
import {profileType, stateType} from '../../redux/state';


export type profilePropsType = {
    postsData: Array<postsDataType>;
    addPost: ()=> void;
    newPostText:string;
    changeNewTextCallback: (newText: string) => void;
}

export const Profile = (props: profilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsName={props.postsData} addPost={props.addPost} newPostText={props.newPostText} changeNewTextCallback={props.changeNewTextCallback}/>
        </div>
    )
}
