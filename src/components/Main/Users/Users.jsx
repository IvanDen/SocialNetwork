import React from 'react';
import styles from './users.module.css'

import Useritem from "./Useritem"
import Paginator from "../../Common/Paginator/Paginator";




let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return (
        <section className={`${styles.users}`}>
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