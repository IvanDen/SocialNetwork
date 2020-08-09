import React from 'react';
import {connect, DefaultRootState} from 'react-redux';
import {
    Follow,
    requestUsers,
    unFollow,
    actions, FilterType
} from '../../../redux/users-reduser';

import Users from './Users';
import Preloader from "../../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersFilter,
    getUsersPage
} from "../../../redux/users-selectors";
import {UsersType} from "../../../Types/types";
import {AppStateType} from "../../../redux/redux-store";
import {Simulate} from "react-dom/test-utils";

type MapStatePropsType = {
    currentPage: number;
    pageSize: number;
    isFetching: boolean;
    totalUsersCount: number;
    users: UsersType[];
    followingInProgress: number[];
    filter: FilterType;
}

type MapDispatchPropsType = {
    Follow: (userId: number) => void;
    unFollow: (userId: number) => void;
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void;
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props;
        this.props.getUsers(currentPage, pageSize, filter);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props;
        this.props.getUsers(pageNumber, pageSize, filter);
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props;
        this.props.getUsers(1, pageSize, filter);
    }

    render() {
        return <>
            <h2>Users list</h2>
            {this.props.isFetching
                ? <Preloader />
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         users={this.props.users}
                         onPageChanged={this.onPageChanged}
                         onFilterChanged={this.onFilterChanged}
                         follow={this.props.Follow}
                         unfollow={this.props.unFollow}
                         followingInProgress={this.props.followingInProgress}
                />}

        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    //we use selectors from users-selectors
    return {
        users: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
};

export default compose(
    withAuthRedirect,
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
        mapStateToProps,{Follow, unFollow, getUsers: requestUsers}),
)(UsersContainer) as React.ComponentType;

