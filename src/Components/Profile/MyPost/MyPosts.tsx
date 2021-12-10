import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Posts/Posts';


export const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.posts}>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                </div>
            </div>
        </div>
    )
}
