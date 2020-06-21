import React from 'react';
import styles from './users.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../../img/list-users.png";
import {UsersType} from "../../../Types/types";

type UserItemPropsType = {
    user: UsersType;
    followingInProgress: number[];
    unfollow: (userId: number) => void;
    follow: (userId: number) => void;
}

const Useritem: React.FC<UserItemPropsType> = ({user, followingInProgress, unfollow, follow}) => {

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
                    <div className={styles.usersMainInfo}>
                        <span className={styles.headInfo}>User name: </span>
                        <span >{user.name}</span>
                    </div>
                    <div className={`${styles.usersMainInfo} ${styles.userStatus}`}>
                        <span className={styles.headInfo}>Users status: </span>
                        {user.status
                            ? <span>{user.status}</span>
                            : <span>--------</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Useritem;
