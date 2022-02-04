import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Posts/Posts';
import {postsDataType} from '../../../App';
import {addPostActionCreator, changeNewPostText, ActionsTypeProfile} from '../../../redux/profileReducer';
import {ActionsTypeMessagePage} from '../../../redux/messagePageReducer';


type postsPropsType = {
    postsName: Array<postsDataType>;
    //addPost: () => void;
    newPostText: string
    //changeNewPostText: (newText: string) => void;
    //dispatch: (action: ActionsTypeProfile | ActionsTypeMessagePage) => void;
    addPost: () => void
    updateNewPostText: (text: string) => void

}


export const MyPosts = (props: postsPropsType) => {

    const onAddPost = () => {
        props.addPost()
        //props.dispatch(addPostActionCreator())
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.content}>
            <div>
                <h3 className={s.postsPadding}>My Posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} value={props.newPostText}/>
                    </div>
                    <button onClick={onAddPost}>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.posts}>
                    {props.postsName.map(posts => <Posts message={posts.message} likeCount={posts.likeCount}/>)}
                </div>
            </div>
        </div>
    )
}
