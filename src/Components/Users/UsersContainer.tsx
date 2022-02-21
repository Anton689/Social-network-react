import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setIsFetching,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from '../../redux/usersReducer';
import {Dispatch} from 'redux';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../Common/preloader/Preloader';

export type MapStateToPropsType = {
    users: InitialStateType
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (newUsers: UsersType[]) => void
    setCurrentPageAC: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching:(isFetching: boolean)=> void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersAPIComponent extends React.Component<UsersPropsType, AppStateType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/`,{
            headers: {
                'API-KEY': 'cdec8a86-dfbd-42af-bdcf-a34dd34bbfb8'
            },
            params: {
                page: this.props.currentPage,
                count: this.props.pageSize
            }
        })
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPageAC(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        return <>
            {this.props.isFetching && <Preloader/>}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
</>

    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,

    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (newUsers) => {
            dispatch(setUsersAC(newUsers))
        },
        setCurrentPageAC: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setIsFetching:(isFetching)=> {
            dispatch(setIsFetching(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

