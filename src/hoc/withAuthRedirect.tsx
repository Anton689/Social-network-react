import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/reduxStore';
import {Redirect} from 'react-router-dom';

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

        if(!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
};

