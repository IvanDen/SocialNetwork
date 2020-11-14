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
import { useHistory } from 'react-router-dom';
import * as queryString from "querystring";

type QueryParamsType = { term?: string, page?: string, friend?: string };
export const Users: React.FC = (props) => {

    const users = useSelector(getUsersPage);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUsersFilter);
    const followingInProgress = useSelector(getFollowingInProgress);

    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        const search = history.location.search.substring(1);
        const parsed = queryString.parse(search) as QueryParamsType;

        let actualPage = currentPage;
        let actualFilter = filter;

        if (parsed.page) actualPage = Number(parsed.page);
        if (parsed.term) actualFilter = {...actualFilter, term: parsed.term as string};

        switch (parsed.friend) {
            case "null":
                actualFilter = {...actualFilter, friend: null}
                break;
            case "true":
                actualFilter = {...actualFilter, friend: true}
                break;
            case "false":
                actualFilter = {...actualFilter, friend: true}
                break;
        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter));
    }, []);

    useEffect(() => {

        const query: QueryParamsType = {};

        if (!!filter.term) query.term = filter.term;
        if (filter.friend !== null) query.friend = String(filter.friend);
        if (currentPage !== 1) query.page = String(currentPage);

        history.push({
            pathname: '/developers',
            search: queryString.stringify(query)
        });
    }, [filter, currentPage]);

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

