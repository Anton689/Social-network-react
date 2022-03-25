import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {authTC, logout} from './auth-reducer';

export type MapStateToPropsType = {
    isAuth: boolean
    login: string

}

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {

        this.props.authTC()
    }

    render() {

        return <>
            <Header {...this.props}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {authTC, logout})(HeaderContainer)
