const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type AllActionsType =
    FollowAcType
    | UnfollowAcType
    | SetUsersType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | SetIsFetchingType
    | ToggleIsFollowingProgressType


export type PhotoType = {
    small: string
    large: string
}

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: number
    photos: PhotoType
    status: number
    followed: boolean

}

export type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],

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
            return {...state, users: action.newUsers}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
            followingInProgress: action.isFetching
                ?  [...state.followingInProgress, action.userId]
                :  state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}

export type ToggleIsFollowingProgressType = ReturnType<typeof toggleIsFollowingProgress>
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}) as const

export type FollowAcType = ReturnType<typeof follow>
export const follow = (userId: number) => ({type: FOLLOW, userId}) as const

export type UnfollowAcType = ReturnType<typeof unfollow>
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId}) as const

export type SetUsersType = ReturnType<typeof setUsers>;
export const setUsers = (newUsers: UsersType[]) => ({type: SET_USERS, newUsers}) as const

export type SetCurrentPageACType = ReturnType<typeof setCurrentPage>;
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const

export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>;
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount}) as const

export type SetIsFetchingType = ReturnType<typeof setIsFetching>;
export const setIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const