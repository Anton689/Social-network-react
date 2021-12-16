import React from 'react';
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img
                    src="https://i0.wp.com/hoppingfeet.com/wp-content/uploads/2018/11/IMG_E9565.jpg?fit=1600%2C1200&ssl=1"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
}
