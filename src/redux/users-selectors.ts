import {AppStateType} from './reduxStore';
import {createSelector} from 'reselect';

//пример использования селектора

export const getUsers2 = (state: AppStateType) => {
     return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsers2,(users)=> {
    return users.filter(t=> true)
})

//----------------------------------------------------------------------------

export const getUsers = (state: AppStateType) => {
     return state.usersPage
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
