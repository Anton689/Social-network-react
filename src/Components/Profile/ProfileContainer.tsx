import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {setStatusTC, setUserProfileTc, updateStatusTC} from '../../redux/profileReducer';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';


export type MapStateToPropsType = {
    profile: any
    status: string
}

type ProfileDispatchPropsType = {
    setUserProfileTc: (profile: number) => void
    setStatusTC: (userId: number) => void
    updateStatusTC: (status: string) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = MapStateToPropsType & ProfileDispatchPropsType & RouteComponentProps<PathParamsType>


class ProfileContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    refreshProfile() {

        let userId: number | null = +this.props.match.params.userId
        if (!userId) {
            userId = 3
        }

        this.props.setUserProfileTc(userId)
        this.props.setStatusTC(userId)

    }

    componentDidMount() {
        this.refreshProfile()


    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusTC}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
export default compose<React.ComponentType>(
    connect<MapStateToPropsType, ProfileDispatchPropsType, {}, AppStateType>(mapStateToProps, {setUserProfileTc, setStatusTC, updateStatusTC}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)


