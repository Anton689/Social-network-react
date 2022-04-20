import {useFormik} from 'formik';
import React from 'react';
import {login} from '../Header/auth-reducer';
import {TypeForLogin} from '../../API/ProfileAPI';
import {Redirect} from 'react-router-dom';
import styleLogin from './Login.module.css';
import {AppStateType} from '../../redux/reduxStore';
import { connect } from 'react-redux';


type PropsType = {
    login: (data: TypeForLogin, status: any) => void;
    isAuth?: boolean
}

const Login = (props: PropsType) => {

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginForm login={props.login}/>
    </div>
};

type ValuesType = {
    email: string;
    password: string;
    rememberMe: boolean;

}

type FormikErrorsType = {
    email?: string;
    password?: string;
    rememberMe?: boolean
}

const LoginForm = (props: PropsType) => {
    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (value) => {
            const errors: FormikErrorsType = {};
            if (!value.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
                errors.email = 'Invalid email address';
            }

            if (!value.password) {
                errors.password = 'Required password';
            } else if (value.password.length < 3) {
                errors.password = 'Password less 3 chars'
            }
            return errors;
        },
        onSubmit: (values: ValuesType,status ) => {
            // setTimeout(() => {
            //     alert(JSON.stringify(values));
            // }, 400);
            const params = {email: values.email, password: values.password, rememberMe: values.rememberMe}
            props.login(params, status.setStatus)

        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                Email
                <div>
                    <input {...formik.getFieldProps('email')}
                           onBlur={formik.handleBlur}
                           placeholder={'email'}/>
                </div>
                {formik.errors.email
                    && formik.touched.email
                    && <div style={{color: 'red'}}>{formik.errors.email}</div>}
                Password
                <div>
                    <input type="password" {...formik.getFieldProps('password')}
                           onBlur={formik.handleBlur}
                           placeholder={'password'}/>
                </div>
                {formik.errors.password
                    && formik.touched.password
                    && <div style={{color: 'red'}}>{formik.errors.password}</div>}
                <div>
                    <input type="checkbox" {...formik.getFieldProps('rememberMe')}
                           onBlur={formik.handleBlur}
                           checked={formik.values.rememberMe}/> Remember me
                </div>
                <div className={styleLogin.statusMessage}>
                    {formik.status}
                </div>
                <div>
                    <button type="submit">Log</button>
                </div>
            </form>

        </div>
    )
}

type MapStateToProps = {
    isAuth:boolean
}

const mapStateToProps = (state: AppStateType): MapStateToProps=> {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)




