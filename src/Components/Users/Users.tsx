import React from 'react';
import style from './userAva.module.css';
import userPhoto from '../../Assets/img/user.jpg';
import {InitialStateType} from '../../redux/usersReducer';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../API/API';

type UsersType = {
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: InitialStateType
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
}

export const Users = (props: UsersType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? style.selectedPage : style.page}
                                 onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
                props.users.users.map(u => <div key={u.id}>

                    <span>
                         <div>
                             <NavLink to={'/profile' + '/' + u.id}>
                             <img className={style.userAva} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                 </NavLink>
                         </div>
                        <div>
                            {u.followed

                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)

                                    usersAPI.following(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleIsFollowingProgress(false, u.id)
                                        })

                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)}  onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)
                                    usersAPI.unfollowing(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleIsFollowingProgress(false, u.id)
                                        })
                                    }}>Follow</button>}
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

