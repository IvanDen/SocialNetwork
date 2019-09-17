import React from 'react';
import styles from './users.module.css'
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <section className={styles.users}>
                <div className={styles.pageList}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {props.onPageChanged(p); }}>{p}</span>
                })}
                </div> {
                props.users.map(user =>
                <div key={user.id} className={styles.userItem}>
                    <div className={styles.imgWrap}>
                          <div>
                              <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : "./img/list-users.png"} className={styles.avatar} />
                              </NavLink>
                          </div>
                          <div>
                              {user.followed
                                  ? <button className={`${styles.subscribe} button`}
                                            onClick={() => [props.unfollow(user.id)]}>Unfollow</button>
                                  : <button className={`${styles.subscribe} button`}
                                            onClick={() => [props.follow(user.id)]}>Follow</button>}
                          </div>
                    </div>
                    <div className={styles.usresInfo}>
                        <span className={styles.nameStatys}>
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