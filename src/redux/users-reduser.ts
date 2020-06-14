import {updateObjectInArray} from "../utils/object-helpers";
import {UsersType} from "../Types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/users-api";


let initialState = {
    users: [] as UsersType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[]// array of users id
};

type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;


const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/USERS/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    "id",
                    {followed: true}
                    )
            };
        case 'SN/USERS/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    "id",
                    {followed: false}
                    )
            };
        case 'SN/USERS/SET_USERS':
            return {
                ...state,
                users: action.users
            };
            case 'SN/USERS/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };
        case 'SN/USERS/SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.count
            };
        case 'SN/USERS/TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            };
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };
        default:
            return state;
    }
};

export const actions = {
    followSuccess: (userId: number) => ({type: 'SN/USERS/FOLLOW', userId} as const),
    unfollowSuccess:(userId: number) => ({type: 'SN/USERS/UNFOLLOW', userId} as const),
    setUsers: (users: UsersType[]) => ({type: 'SN/USERS/SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SN/USERS/SET_CURRENT_PAGE', currentPage} as const),
    setUsersTotalCount:(totalUsersCount: number) => ({type: 'SN/USERS/SET_TOTAL_USERS_COUNT', count: totalUsersCount} as const),
    setToggleIsFetching: (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const),
}

export const requestUsers = (page: number, pageSize: number): ThunkType => {
     return async (dispatch, getState) => {
        dispatch(actions.setToggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(actions.setToggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setUsersTotalCount(data.totalCount));
    }
}

const _followUnfollowFlow = async (
    dispatch: Dispatch<ActionsType>,
    userId: number,
    apiMethod: any,
    actionCreator: (userId: number) => ActionsType) => {
    dispatch(actions.toggleFollowingProgress(true, userId));

    let data = await apiMethod(userId);
    if (data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export const Follow = (userId: number): ThunkType => {
    return async (dispatch, getState) => {
        let apiMethod = await usersAPI.follow.bind(usersAPI);
        let actionCreator = actions.followSuccess;
        await _followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}

export const unFollow = (userId: number): ThunkType => {
    return async (dispatch, getState) => {
        let apiMethod = await usersAPI.unFollow.bind(usersAPI);
        let actionCreator = actions.unfollowSuccess;
        await _followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}

export default usersReducer;
