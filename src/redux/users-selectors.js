import {createSelector} from "reselect";

// select is a function that takes a state and returns a value.
// We necessary reselect lib (function createSelector)
export const getUsersSelector = (state) => {//simple select
    return state.usersPage.users;
}

export const getUsersPage = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}


