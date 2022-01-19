import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import {store, StoreType} from './redux/state';


const renderEntireTree = (_store: StoreType) => {
    ReactDOM.render(

            <App
                store={_store}

                dispatch={_store.dispatch.bind(store)}
                addNewMessage={_store.addNewMessage.bind(store)}
                changeNewMessageText={_store.changeNewMessageText.bind(store)}
            />
        ,
        document.getElementById('root')
    );
}
renderEntireTree(store);
store.subscribe(() => renderEntireTree(store))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
