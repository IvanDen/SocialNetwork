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

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}
        &count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {

        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${pageNumber}
        &count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(response.data.items);
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