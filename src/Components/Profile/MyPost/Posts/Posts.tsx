import React from 'react';
import s from './Posts.module.css';

type MessageType = {
    message: string;
    likeCount: number;
}

export const Posts: React.FC<MessageType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
                alt=""/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}
