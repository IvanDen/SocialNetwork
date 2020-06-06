import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reduser";
// import { createStore, applyMiddleware, compose } from 'redux';


let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer

});

type RootReducerType = typeof rootReducers; // (globalstate: GLOBALSTATE) => GLOBALSTATE
export type AppStateType = ReturnType<RootReducerType>;

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.__store__ = store;

export default store;
