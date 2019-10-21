import React from 'react';
import {connect} from 'react-redux';
import {
    Follow, requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unFollow
} from '../../../redux/users-reduser';

import Users from './Users';
import Preloader from "../../Common/Preloader/Preloader.js";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersPage
} from "../../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
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
                /> }

        </>
    }
}


let mapsStateToProps = (state) => {
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
    connect(mapsStateToProps,
        {Follow, unFollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers}),
)(UsersContainer);