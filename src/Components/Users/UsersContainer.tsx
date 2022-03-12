import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {
    follow,
    getUsersTC,
    InitialStateType,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow
} from '../../redux/usersReducer';
import {Users} from './Users';
import {Preloader} from '../Common/preloader/Preloader';

export type MapStateToPropsType = {
    users: InitialStateType
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}

export type DispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    // setUsers: (newUsers: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    // setIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersTC: Function
}

console.log('asd')

export type UsersPropsType = MapStateToPropsType & DispatchPropsType

export class UsersAPIComponent extends React.Component<UsersPropsType, AppStateType> {
    componentDidMount() {

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersTC(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber);
        // this.props.setIsFetching(true);
        //
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.setIsFetching(false)
        //         this.props.setUsers(data.items)
        //     });
    }

    render() {

        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         users={this.props.users}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         followingInProgress={this.props.followingInProgress}/>}
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
        followingInProgress: state.usersPage.followingInProgress,

    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsersTC,
    toggleIsFollowingProgress
})(UsersAPIComponent)

