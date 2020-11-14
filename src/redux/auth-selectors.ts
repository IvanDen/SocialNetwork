import {AppStateType} from "./redux-store";

// select is a function that takes a state and returns a value.
// We necessary reselect lib (function createSelector)
export const selectIsAuth = (state: AppStateType) => {//simple select
	return state.auth.isAuth;
}
export const selectCurrentUserLogin = (state: AppStateType) => {//simple select
	return state.auth.login;
}



