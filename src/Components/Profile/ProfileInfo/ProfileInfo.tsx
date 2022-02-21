import React from 'react';
import s from './ProfileInfo.module.css';

type ProfileInfoType = {
    profile: any
    fullname: string
    contacts: string
    aboutMe: string

}

export const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <div>
                <img className={s.mainImg}
                     src="https://i0.wp.com/hoppingfeet.com/wp-content/uploads/2018/11/IMG_E9565.jpg?fit=1600%2C1200&ssl=1"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile}/>
            </div>
            <div>{props.fullname}</div>
            <div>{props.contacts}</div>
            <div>{props.aboutMe}</div>

        </div>
    )
}
