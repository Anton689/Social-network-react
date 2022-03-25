import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from './Posts/Posts';
import {postsDataType} from '../../../App';
import {Form, ValuesType} from '../../../Forms/Form';


type postsPropsType = {
    postsName: Array<postsDataType>;
    addPost: (newPostText: string)=> void

}

export const MyPosts = (props: postsPropsType) => {


    const addNewPostText = (value:ValuesType)=> {
        props.addPost(value.newText as string)
    }

    return (
        <div className={s.content}>
            <div>
                <h3 className={s.postsPadding}>My Posts</h3>
                <div>
                    <Form callback={addNewPostText} removeButton={false}/>
                </div>
                <div className={s.posts}>
                    {props.postsName.map(posts => <Posts message={posts.message} likeCount={posts.likeCount}/>)}
                </div>
            </div>
        </div>
    )
}


// type ValuesType = {
//     newPostText: string
// }
//
// type FormikErrorsType = {
//     newPostText?: string
// }
//
// type AddPostFormType = {
//     addNewPostText: (values:ValuesType)=> void
// }
//
// export const AddPostForm = (props: AddPostFormType) => {
//
//     let formik = useFormik({
//         initialValues: {
//             newPostText: ''
//         },
//         validate: (value)=> {
//             let error: FormikErrorsType = {};
//
//             if (!value.newPostText) {
//                 error.newPostText = 'Required';
//                 console.log(error)
//             } else if (value.newPostText.length > 50) {
//                 error.newPostText = 'Invalid text';
//             }
//             return error
//         },
//         onSubmit: (values: ValuesType) => {
//             props.addNewPostText(values)
//         }
//     })
//
//     return (
//         <div>
//             <form onSubmit={formik.handleSubmit}>
//                     <textarea {...formik.getFieldProps('newPostText')}/>
//                     {formik.errors.newPostText && formik.touched.newPostText && <div>{formik.errors.newPostText}</div>}
//                 <div>
//                     <button type="submit">Add post</button>
//                     <button type="button">Remove</button>
//                 </div>
//             </form>
//
//         </div>
//     )
// }
