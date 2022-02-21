import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {setUserProfile} from '../../redux/profileReducer';


export type MapStateToPropsType = {
    profile : any
}

type ProfileDispatchPropsType = {
    setUserProfile: (profile:number)=> void
}

type ProfilePropsType = MapStateToPropsType & ProfileDispatchPropsType


class ProfileContainer extends React.Component<ProfilePropsType, AppStateType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`, {
            headers: {
                'API-KEY': 'cdec8a86-dfbd-42af-bdcf-a34dd34bbfb8'
            }})
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }


    render() {
        return (
            <div>
                <Profile profile={this.props.profile} />
            </div>
        )
    }
}

const mapStateToProps  = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
