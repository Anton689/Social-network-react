import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogPageReducer from './messagePageReducer';
import sidebarReducer from './sidebarReducer';
import {StoreType} from './store';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogPageReducer,
    sidebar: sidebarReducer
});

export let store: StoreType = createStore(reducers);

