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

}

export type InitialStateType = {
    users: UsersType[]
}

let initialState: InitialStateType = {
    users: [
        {id: 1, followed: false, fullName: 'Anton', status: 'How are you?', location: {city: 'SPB', country: 'Russia'}},
        {id: 2, followed: false, fullName: 'Mariya', status: 'Hey', location: {city: 'SPB', country: 'Russia'}},
        {id: 3, followed: true, fullName: 'Kolya', status: 'working...', location: {city: 'Kiev', country: 'Ukraine'}},
        {
            id: 4,
            followed: false,
            fullName: 'Sveta',
            status: 'want to learn cs',
            location: {city: 'Minsk', country: 'Belarus'}
        },
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