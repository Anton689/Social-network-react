import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPost/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {postsDataType} from './../../App'


export type profilePropsType = {
    postsData: Array<postsDataType>;
    addPost: (postMessage:string)=> void;
}

export const Profile = (props: profilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsName={props.postsData} addPost={props.addPost}/>
        </div>
    )
}
