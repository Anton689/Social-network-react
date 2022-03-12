import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import profileReducer from './profileReducer';
import dialogPageReducer from './messagePageReducer';
import sidebarReducer from './sidebarReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from '../Components/Header/auth-reducer';
import thunk from 'redux-thunk';

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

//type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<typeof rootReducers>


export let store: Store<AppStateType> = createStore(rootReducers, applyMiddleware(thunk) );

