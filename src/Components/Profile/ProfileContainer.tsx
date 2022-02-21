import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {setUserProfile} from '../../redux/profileReducer';
import {useMatch, useParams} from 'react-router-dom';


export type MapStateToPropsType = {
    profile: any
}

type ProfileDispatchPropsType = {
    setUserProfile: (profile: number) => void
}

type MatchType= {
    match: any
}

type ProfilePropsType = MapStateToPropsType & ProfileDispatchPropsType


class ProfileContainer extends React.Component<any, AppStateType> {

    componentDidMount() {
     /*  let userId = this.props.match && typeof this.props.match.params.userId === 'number' ?
           this.props.match.params.userId : '3'*/

        let userId = this.props.params['*'] ? this.props.params['*'] : '3'

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
            headers: {
                'API-KEY': 'cdec8a86-dfbd-42af-bdcf-a34dd34bbfb8'
            }
        })
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }
    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

const ProfileURLMatch = (props: ProfilePropsType) => {
    const match = useMatch('/profile/:userId/');
    const params = useParams()
    console.log(params)
    return <ProfileContainer params={params} {...props}/>;
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileURLMatch)
