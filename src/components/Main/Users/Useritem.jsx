import React from 'react';
import styles from './users.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from "../../../img/list-users.png"





let Useritem = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div className={styles.userItem}>
            <div className={styles.imgWrap}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.avatar} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={`${styles.subscribe}`}
                                  onClick={() => {
                                      unfollow(user.id);
                                  }}>Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={`${styles.subscribe}`}
                                  onClick={() => {
                                      follow(user.id);
                                  }}>Follow</button>}
                </div>
            </div>
            <div className={styles.usersInfo}>
                <div className={styles.nameAndStatus}>
                    <span>{user.name}</span>
                    <span className={styles.userStatus}>{user.status}</span>
                </div>
                <div>
                    <span>{"user.location.country"}</span>
                    <span>{"user.location.city"}</span>
                </div>
            </div>
        </div>
    )
}

export default Useritem;