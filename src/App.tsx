import React from 'react';
import './App.css';
import {Profile} from './Components/Profile/Profile';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {News} from './Components/News/News';
import {Music} from './Components/Music/Music';
import {Settings} from './Components/Settings/Settings';
import {ActionsType, StoreType} from './redux/state';

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
    store: StoreType;
    dispatch: (action: ActionsType) => void;
}

const App = (props: appPropsType) => {
    const {messagePage, profile} = props.store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs message={messagePage.message}
                                                                   dialogs={profile.dialogs}
                                                                   dispatch={props.dispatch}
                        />}/>

                        <Route path="/profile/*" element={<Profile postsData={profile.posts}
                                                                   dispatch={props.dispatch}
                                                                   newPostText={profile.newPostText}
                        />}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
