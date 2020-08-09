import React from 'react';
import styles from './users.module.css'

import Useritem from "./Useritem"
import Paginator from "../../Common/Paginator/Paginator";
import {UsersType} from "../../../Types/types";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType} from "../../../redux/users-reduser";

type PropsType = {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    onFilterChanged: (filter: FilterType) => void,
    users: Array<UsersType>,
    followingInProgress: Array<number>
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}

let Users: React.FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return (
        <section className={`${styles.users}`}>
            <UsersSearchForm
                onFilterChanged={props.onFilterChanged}
            />
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize} />
            <div className={styles.usersList} >
                {users.map(user => <Useritem
                    user={user}
                    key={user.id}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                /> )}
            </div>

        </section>
    )
}

export default Users;
