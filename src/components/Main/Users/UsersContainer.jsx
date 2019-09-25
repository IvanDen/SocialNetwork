import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setUsers,
    setUsersTotalCount,
    unfollow
} from '../../../redux/users-reduser';
import * as axios from 'axios/index';
import Users from './Users';
import Preloader from "../../Common/Preloader/Preloader.js";
import {usersAPI} from "../../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader />
                : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          users={this.props.users}
                          onPageChanged={this.onPageChanged}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapsStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};


export default connect(mapsStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, setToggleIsFetching})(UsersContainer);