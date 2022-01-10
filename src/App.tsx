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
import {changeNewMessageText, changeNewText, profileType, state, stateType} from './redux/state';

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
     // posts?: Array<postsDataType>;
     // message?: Array<DataDialogsType>;
     // dialogs?: Array<DataDialogsType>;
    appState: stateType;
    addPost: () => void;
    newPostText: string;
    changeNewTextCallback: (newText: string) => void;
    addNewMessage: () => void;
    changeNewMessageText: (newText:string) => void;
}

const App = (props: appPropsType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs message={props.appState.messagePage.message}
                                                                   dialogs={props.appState.profile.dialogs}
                                                                   addNewMessage={props.addNewMessage}
                                                                   changeNewMessageText={props.changeNewMessageText}/>}/>

                        <Route path="/profile/*" element={<Profile postsData={props.appState.profile.posts}
                                                                   addPost={props.addPost}
                                                                   newPostText={props.appState.profile.newPostText}
                                                                   changeNewTextCallback={changeNewText}/>}/>
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
