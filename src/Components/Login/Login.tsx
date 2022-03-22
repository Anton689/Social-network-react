import {Field, Form, Formik, FormikHelpers} from 'formik';
import React from 'react';

// export const LoginForm = () => {
//     return (
//         <form>
//             <div>
//                 <input placeholder={'Login'}/>
//             </div>
//             <div>
//                 <input placeholder={'Password'}/>
//             </div>
//             <input type="checkbox"/> remember me
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// };

export const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
};

type ValuesType = {
    login: string;
    password: string;

}


export const LoginForm = () => {

    const validateHandler = (values: any) => {
        const errors = {};
        return errors;
    }

    const onSubmitHandler = (values: ValuesType, {setSubmitting}: FormikHelpers<ValuesType>)=> {
        setTimeout(() => {
            alert(JSON.stringify(values));
            setSubmitting(false);
        }, 400);
    }

    return <div>
        <Formik
            initialValues={{login: '', password: ''}}
            validate={validateHandler}
            onSubmit={onSubmitHandler}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                    <Field type="login" name="login" placeholder='login'/>
                    </div>
                    <div>
                    <Field type="password" name="password" placeholder='password'/>
                    </div>
                    <div>
                        <Field type="checkbox" name="checkbox" /> Remember me
                    </div>
                    <div>
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
};


