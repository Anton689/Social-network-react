import React from 'react';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type AllActionsType = FollowAcType | UnfollowAcType | SetUsersType

export type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    fullName: string
    status: string
    location: LocationType
    followed: boolean,
    photoUrl: string

}

export type InitialStateType = {
    users: UsersType[]
}

let initialState: InitialStateType = {
    users: [
        // {id: 1, photoUrl: 'https://cdn.webshopapp.com/shops/103628/files/348654620/rick-sanchez-rick-and-morty-head.jpg', followed: false, fullName: 'Anton', status: 'How are you?', location: {city: 'SPB', country: 'Russia'}},
        // {id: 2, photoUrl: 'https://i.pinimg.com/736x/24/2c/94/242c944b035f5b5d9fd202288c102870.jpg', followed: false, fullName: 'Mariya', status: 'Hey', location: {city: 'SPB', country: 'Russia'}},
        // {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNonlqj0HhE5fdUlUf-_6c4JxdStJJY1CCg&usqp=CAU', followed: true, fullName: 'Kolya', status: 'working...', location: {city: 'Kiev', country: 'Ukraine'}},
        // {id: 4, photoUrl: 'https://d.newsweek.com/en/full/1578096/rick-morty-season-4-part-2.jpg?w=1600&h=1600&l=35&t=28&q=88&f=26a14a4b300bdf315a5af082ad2d8a77' ,followed: false, fullName: 'Sveta', status: 'want to learn cs', location: {city: 'Minsk', country: 'Belarus'}},
    ]

}

export const usersReducer = (state: InitialStateType = initialState, action: AllActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            };
        case SET_USERS:
            return {...state, users : [...state.users, ...action.newUsers]}
        default:
            return state
    }
}

export type FollowAcType = ReturnType<typeof followAC>
export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const

export type UnfollowAcType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const

export type SetUsersType = ReturnType<typeof setUsersAC>;
export const setUsersAC = (newUsers: UsersType[]) => ({type: SET_USERS, newUsers}) as const