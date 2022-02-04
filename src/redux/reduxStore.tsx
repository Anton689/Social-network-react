import {combineReducers, createStore, Store} from 'redux';
import profileReducer from './profileReducer';
import dialogPageReducer from './messagePageReducer';
import sidebarReducer from './sidebarReducer';
import {StoreType} from './store';

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogPageReducer,
    sidebar: sidebarReducer
});

//type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<typeof rootReducers>

export let store: Store<AppStateType> = createStore(rootReducers);

