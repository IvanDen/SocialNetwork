import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {PhotosType, UsersType} from "../Types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [] as UsersType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[]// array of users id
};
type InitialStateType = typeof initialState;
const usersReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    "id",
                    {followed: true}
                    )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    "id",
                    {followed: false}
                    )
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
            case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
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

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId});
type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userId});
type SetUsersActionType = {
    type: typeof SET_USERS
    users: UsersType[]
}
export const setUsers = (users: UsersType[]): SetUsersActionType => ({type: SET_USERS, users});
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage});
type SetUsersTotalCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const setUsersTotalCount = (totalUsersCount: number): SetUsersTotalCountActionType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
type SetToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const setToggleIsFetching = (isFetching: boolean): SetToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const requestUsers = (page: number, pageSize: number) => {

     return async (dispatch: any) => {
        dispatch(setToggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(setToggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));

    let data = await apiMethod(userId);
    if (data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const Follow = (userId: number) => {
    return async (dispatch: any) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);
        let actionCreator = followSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}

export const unFollow = (userId: number) => {
    return async (dispatch: any) => {
        let apiMethod = usersAPI.unFollow.bind(usersAPI);
        let actionCreator = unfollowSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}

export default usersReducer;
