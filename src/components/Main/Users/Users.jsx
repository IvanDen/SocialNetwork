import React from 'react';
import styles from './users.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from "../../../img/list-users.png"
import * as axios from "axios/index";
import {usersAPI} from "../../../api/api";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <section className={styles.users}>
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
                                  ? <button className={`${styles.subscribe}`}
                                            onClick={() => {

                                                /*axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': 'ef3749fc-291d-4d38-9a5b-8971e825c8f4'
                                                    }
                                                })*/
                                                usersAPI.unFollow(user.id)
                                                    .then(data => {
                                                        if (data.resultCode == 0) {
                                                            props.unfollow(user.id);
                                                        }
                                                    });
                                            }}>Unfollow</button>
                                  : <button className={`${styles.subscribe}`}
                                            onClick={() => {
                                                /*axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': 'ef3749fc-291d-4d38-9a5b-8971e825c8f4'
                                                    }
                                                })*/
                                                usersAPI.follow(user.id)
                                                    .then(data => {
                                                        if (data.resultCode == 0) {
                                                            props.follow(user.id);
                                                        }
                                                    });
                                            }}>Follow</button>}
                          </div>
                    </div>
                    <div className={styles.usersInfo}>
                        <span className={styles.nameStatus}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </div>
                </div>)}
            </section>

}


export default Users;