import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Posts/Posts';
import {postsDataType} from '../../../App';
import {Field, Form, Formik} from 'formik';


type postsPropsType = {
    postsName: Array<postsDataType>;
    addPost: (newPostText: string)=> void

}

export const MyPosts = (props: postsPropsType) => {


    const addNewPostText = (value:ValuesType)=> {
        props.addPost(value.newPostText)
    }

    return (
        <div className={s.content}>
            <div>
                <h3 className={s.postsPadding}>My Posts</h3>
                <div>
                    <AddPostForm addNewPostText={addNewPostText}/>
                </div>
                <div className={s.posts}>
                    {props.postsName.map(posts => <Posts message={posts.message} likeCount={posts.likeCount}/>)}
                </div>
            </div>
        </div>
    )
}

type ValuesType = {
    newPostText: string
}

type AddPostFormType = {
    addNewPostText: (values:ValuesType)=> void
}

export const AddPostForm = (props: AddPostFormType) => {

    const onSubmitHandler = (values: ValuesType) => {
        props.addNewPostText(values)
    }

    return (
        <Formik
            initialValues={{newPostText: ''}}
            onSubmit={onSubmitHandler}
        >
            <Form>
                <Field name="newPostText" as="textarea"/>
                <div>
                <button type="submit">
                    Add post
                </button>
                <button type="button">
                    Remove
                </button>
                </div>
            </Form>
        </Formik>
    )
}
