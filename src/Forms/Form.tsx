import React from 'react';
import {useFormik} from 'formik';

type FormikErrorsType = {
    newText?: string
}

export type ValuesType = {
    callback?: (values: ValuesType) => void
    newText?: string
    removeButton?: boolean
};


export const Form = (props: ValuesType) => {
    let formik = useFormik({
        initialValues: {
            newText: ''
        },
        validate: (value) => {
            let error: FormikErrorsType = {};

            if (!value.newText) {
                error.newText = 'Required';
            } else if (value.newText.length > 10) {
                error.newText = 'Invalid text';
            }
            return error
        },
        onSubmit: (values: ValuesType) => {
            if (props.callback) {
                props.callback(values)
            }
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <textarea {...formik.getFieldProps('newText')}
                          onBlur={formik.handleBlur}/>
                {formik.errors.newText
                    && formik.touched.newText
                    && <div style={{color: 'red'}}>{formik.errors.newText}</div>}
                <div>
                    <button type="submit">Add post</button>
                    {props.removeButton ? <button type="button">Remove</button> : ''}
                </div>
            </form>

        </div>
    )
};

