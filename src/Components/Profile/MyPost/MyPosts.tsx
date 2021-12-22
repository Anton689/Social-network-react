import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Posts/Posts';


export const MyPosts = () => {

    type postsDataType = {
        id:number;
        message: string;
        likeCount: number;
    }

    let postsData: Array<postsDataType> = [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'It\'s my first post', likeCount: 20},
    ]

    return (
        <div className={s.content}>
            <div>
                <h3 className={s.postsPadding}>My Posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.posts}>
                    <Posts message={postsData[0].message} likeCount={postsData[0].likeCount}/>
                    <Posts message={postsData[1].message} likeCount={postsData[1].likeCount}/>
                </div>
            </div>
        </div>
    )
}
