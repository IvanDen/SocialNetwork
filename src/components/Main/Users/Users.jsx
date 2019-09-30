import React from 'react';
import styles from './users.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from "../../../img/list-users.png"




let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <section className={`${styles.users}`}>
                <div className={styles.pageList}>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}
                </div> {
                props.users.map(user =>
                <div key={user.id} className={styles.userItem}>
                    <div className={styles.imgWrap}>
                          <div>
                              <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.avatar} />
                              </NavLink>
                          </div>
                          <div>
                              {user.followed
                                  ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                            className={`${styles.subscribe}`}
                                            onClick={() => {
                                                props.unfollow(user.id);
                                            }}>Unfollow</button>

                                  : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                            className={`${styles.subscribe}`}
                                            onClick={() => {
                                                props.follow(user.id);
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
                </div>)}
            </section>

}


export default Users;