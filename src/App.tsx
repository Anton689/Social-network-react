import React from 'react';
import './App.css';
import {Profile} from "./Components/Profile";
import {Header} from "./Components/Header";
import {Navbar} from "./Components/Navbar";




const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


export default App;
