import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPost/MyPostsContainer';
import {Preloader} from '../Common/preloader/Preloader';


export type profilePropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void

}

export const Profile = (props: profilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <ProfileInfo profile={props.profile.photos.small}
                         fullname={props.profile.fullName}
                         contacts={props.profile.contacts.facebook}
                         aboutMe={props.profile.aboutMe}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}
