import React from 'react';
import {connect, DefaultRootState} from 'react-redux';
import {
    Follow,
    requestUsers,
    unFollow,
    actions
} from '../../../redux/users-reduser';

import Users from './Users';
import Preloader from "../../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersPage
} from "../../../redux/users-selectors";
import {UsersType} from "../../../Types/types";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: UsersType[]
    followingInProgress: number[]
}

type MapDispatchPropsType = {
    Follow: (userId: number) => void
    unFollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


type PropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<PropsType> {


    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            <h2>Some Title!</h2>
            {this.props.isFetching
                ? <Preloader />
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         users={this.props.users}
                         onPageChanged={this.onPageChanged}
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
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    withAuthRedirect,
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
        mapStateToProps,{Follow, unFollow, getUsers: requestUsers}),
)(UsersContainer) as React.ComponentType;

