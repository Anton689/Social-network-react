import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {AppStateType} from '../redux/reduxStore';

type MapStateToPropstype = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropstype => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export function WithAuthRedirect <T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropstype) => {
        let {isAuth, ...restProps}=props

        if(!isAuth) return <Navigate to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
};

