import React, {Component} from 'react';
import './App.css';
import {Navbar} from './Components/Navbar/Navbar';
import {News} from './Components/News/News';
import {Music} from './Components/Music/Music';
import {Settings} from './Components/Settings/Settings';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Login from './Components/Login/Login';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {AppStateType} from './redux/reduxStore';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './Components/Common/preloader/Preloader';


export type DataDialogsType = {
    id: number;
    name?: string;
    message?: string;
}
export type postsDataType = {
    id: number;
    message: string;
    likeCount: number;
}

export type appPropsType = {
    //appState: stateType;
    //addPost: () => void;
    //changeNewPostText: (newText: string) => void;
    // addNewMessage: () => void;
    // changeNewMessageText: (newText: string) => void;
    //store: AppStateType;
    //dispatch: (action: ActionsTypeProfile | ActionsTypeMessagePage) => void;
}

class App extends Component<any, any> {
    //const {dialogsPage, profilePage} = props.store

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>

                            <Route path="/dialogs/" render={() => <DialogsContainer/>}/>

                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>

                            <Route path="/news/" render={() => <News/>}/>

                            <Route path="/music/" render={() => <Music/>}/>

                            <Route path="/settings/" render={() => <Settings/>}/>

                            <Route path="/users/" render={() => <UsersContainer/>}/>

                            <Route path="/login/" render={() => <Login/>}/>

                        </Switch>
                    </div>
                </div>
        );
    }
}

export type MapStateToPropsType = {
    initialized: boolean
}

let mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}


export default compose<React.ComponentType> (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
