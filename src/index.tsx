import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {DataDialogsType, postsDataType} from './App';
import reportWebVitals from './reportWebVitals';

let posts: Array<postsDataType> = [
    {id: 1, message: 'Hi, how are you?', likeCount: 15},
    {id: 2, message: 'It\'s my first post', likeCount: 20},
]
let dialogs: Array<DataDialogsType> = [{id: 1, name: 'Anton'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'C'},
    {id: 4, name: 'D'},
    {id: 5, name: 'E'},
    {id: 6, name: 'G'}
]

let messages: Array<DataDialogsType> = [
    {id: 1, message: 'Privet'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'How is your it-kamasutra?'},
    {id: 4, message: 'Hey'},
    {id: 5, message: 'E'},
    {id: 6, message: 'G'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} message={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
