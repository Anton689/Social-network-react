import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

// type HeaderType = {
//     isAuth: boolean
//     login: string
// }


export const Header = ({...props}) => {
    return (
        <header className={s.header}>
            <img
                src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"
                alt=""/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    :
                    <NavLink to={'/login'}> Login </NavLink>}
            </div>
        </header>
    );
}
