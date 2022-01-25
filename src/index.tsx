import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './redux/reduxStore';
import {StoreType} from './redux/store';


const renderEntireTree = (_store: StoreType) => {
    ReactDOM.render(
        <App
            store={_store}

            dispatch={_store.dispatch.bind(store)}
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
