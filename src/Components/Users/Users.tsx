import React from 'react';
import {UsersPropsType} from './UsersContainer';
import style from './userAva.module.css';
import axios from 'axios';
import userPhoto from '../../../src/Assets/img/user.jpg'


export const Users = (props:UsersPropsType) => {

    if (props.users.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            });

        // props.setUsers([
        //     {id: 1, photoUrl: 'https://cdn.webshopapp.com/shops/103628/files/348654620/rick-sanchez-rick-and-morty-head.jpg', followed: false, fullName: 'Anton', status: 'How are you?', location: {city: 'SPB', country: 'Russia'}},
        //     {id: 2, photoUrl: 'https://i.pinimg.com/736x/24/2c/94/242c944b035f5b5d9fd202288c102870.jpg', followed: false, fullName: 'Mariya', status: 'Hey', location: {city: 'SPB', country: 'Russia'}},
        //     {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNonlqj0HhE5fdUlUf-_6c4JxdStJJY1CCg&usqp=CAU', followed: true, fullName: 'Kolya', status: 'working...', location: {city: 'Kiev', country: 'Ukraine'}},
        //     {id: 4, photoUrl: 'https://d.newsweek.com/en/full/1578096/rick-morty-season-4-part-2.jpg?w=1600&h=1600&l=35&t=28&q=88&f=26a14a4b300bdf315a5af082ad2d8a77' ,followed: false, fullName: 'Sveta', status: 'want to learn cs', location: {city: 'Minsk', country: 'Belarus'}},
        // ])
    }

    return (
        <div>
            {
                props.users.users.map(u => <div key={u.id}>
                    <span>
                         <div>
                             <img className={style.userAva} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                         </div>
                        <div>
                            {u.followed
                                ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={()=> {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </span>
                    </span>
                </div>)

            }
        </div>
    );
};
