import React from "react";
import s from'./Profile.module.css';


export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://i0.wp.com/hoppingfeet.com/wp-content/uploads/2018/11/IMG_E9565.jpg?fit=1600%2C1200&ssl=1" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My Posts
                <div>
                    new post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    )
}
