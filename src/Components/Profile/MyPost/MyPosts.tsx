import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Posts/Posts';
import {postsDataType} from '../../../App';


type postsPropsType = {
    postsName: Array<postsDataType>;
    addPost: (postMessage:string)=> void;
}

export const MyPosts = (props: postsPropsType) => {

    //let postsElements = props.postsName.map(posts => <Posts message={posts.message} likeCount={posts.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.addPost(newPostElement.current ? newPostElement.current.value : '');

    }

    return (
        <div className={s.content}>
            <div>
                <h3 className={s.postsPadding}>My Posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.posts}>
                    {props.postsName.map(posts => <Posts message={posts.message} likeCount={posts.likeCount}/>)}
                </div>
            </div>
        </div>
    )
}
