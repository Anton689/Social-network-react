import {useFormik} from 'formik';
import React from 'react';

export const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
};

type ValuesType = {
    login?: string;
    password?: string;
    rememberMe?: boolean
}

type FormikErrorsType = {
    login?: string;
    password?: string;
    rememberMe?: boolean
}

export const LoginForm = () => {
    let formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false
        },
        validate: (value) => {
            const errors: FormikErrorsType = {};
            if (!value.login) {
                errors.login = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.login)) {
                errors.login = 'Invalid email address';
            }

            if (!value.password) {
                errors.password = 'Required password';
            } else if (value.password.length < 3) {
                errors.password = 'Password less 3 chars'
            }
            return errors;
        },
        onSubmit: (values: ValuesType) => {
            setTimeout(() => {
                alert(JSON.stringify(values));
            }, 400);
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                Email
                <div>
                    <input {...formik.getFieldProps('login')}
                           onBlur={formik.handleBlur}/>
                </div>
                {formik.errors.login
                    && formik.touched.login
                    && <div style={{color: 'red'}}>{formik.errors.login}</div>}
                Password
                <div>
                    <input type="password" {...formik.getFieldProps('password')}
                           onBlur={formik.handleBlur}/>
                </div>
                {formik.errors.password
                    && formik.touched.password
                    && <div style={{color: 'red'}}>{formik.errors.password}</div>}
                <div>
                    <input type="checkbox" {...formik.getFieldProps('rememberMe')}
                           onBlur={formik.handleBlur}
                           checked={formik.values.rememberMe}/> Remember me
                </div>
                <div>
                    <button type="submit">Log</button>
                </div>
            </form>

        </div>
    )
}


