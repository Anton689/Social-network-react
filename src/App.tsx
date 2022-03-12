import React from 'react';
import './App.css';
import {Navbar} from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {News} from './Components/News/News';
import {Music} from './Components/Music/Music';
import {Settings} from './Components/Settings/Settings';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';


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

const App = (props: appPropsType) => {
    //const {dialogsPage, profilePage} = props.store
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>

                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>

                        <Route path="/profile/*" element={<ProfileContainer/>}/>

                        <Route path="/news/*" element={<News/>}/>

                        <Route path="/music/*" element={<Music/>}/>

                        <Route path="/settings/*" element={<Settings/>}/>

                        <Route path="/users/*" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
