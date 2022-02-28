import {combineReducers, createStore, Store, StoreEnhancer} from 'redux';
import profileReducer from './profileReducer';
import dialogPageReducer from './messagePageReducer';
import sidebarReducer from './sidebarReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from '../Components/Header/auth-reducer';

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

//type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<typeof rootReducers>

type WindowWithDevTools = Window & {
    __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, {}>
}

const isReduxDevtoolsExtenstionExist =
    (arg: Window | WindowWithDevTools):
        arg is WindowWithDevTools  => {
        return  '__REDUX_DEVTOOLS_EXTENSION__' in arg;
    }

export let store: Store<AppStateType> = createStore(rootReducers, isReduxDevtoolsExtenstionExist(window) ?
    window.__REDUX_DEVTOOLS_EXTENSION__() : undefined);

