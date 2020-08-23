import React, {useEffect} from 'react';
import styles from './users.module.css'

import {Useritem} from "./Useritem"
import Paginator from "../../Common/Paginator/Paginator";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, Follow, requestUsers, unFollow} from "../../../redux/users-reduser";
import {useSelector, useDispatch} from "react-redux";
import {
    getCurrentPage,
    getPageSize,
    getUsersPage,
    getTotalUsersCount,
    getUsersFilter,
    getFollowingInProgress
} from "../../../redux/users-selectors";

export const Users: React.FC = (props) => {

    const users = useSelector(getUsersPage);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUsersFilter);
    const followingInProgress = useSelector(getFollowingInProgress);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter));
    }, []);

    const onPageChanged = (pageNumber: number): void => {
        dispatch(requestUsers(pageNumber, pageSize, filter));
    }

    const onFilterChanged = (filter: FilterType): void => {
        dispatch(requestUsers(1, pageSize, filter));
    }
    const follow = (userId: number): void => {
        dispatch(Follow(userId));
    }

    const unfollow = (userId: number): void => {
        dispatch(unFollow(userId));
    }


    return (
        <section className={`${styles.users}`}>
            <UsersSearchForm
                onFilterChanged={onFilterChanged}
            />
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize} />
            <div className={styles.usersList} >
                {users.map(user => <Useritem
                    user={user}
                    key={user.id}
                    followingInProgress={followingInProgress}
                    unfollow={unfollow}
                    follow={follow}
                /> )}
            </div>
        </section>
    )
}

