import React from 'react';
import * as axios from 'axios';
import styles from './users.module.css'

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(user =>
                        <div key={user.id}>
                            <span>
                                  <div>
                                      <img src={user.photos.small != null ? user.photos.small : "./img/list-users.png"} className={styles.avatar} />
                                  </div>
                                  <div>
                                      {user.followed
                                          ? <button className={`${styles.subscribe} button`} onClick={() => [this.props.unfollow(user.id)]}>Unfollow</button>
                                          : <button className={`${styles.subscribe} button`} onClick={() => [this.props.follow(user.id)]}>Follow</button>}
                                  </div>
                            </span>
                            <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{"user.location.country"}</div>
                                    <div>{"user.location.city"}</div>
                                </span>
                            </span>
                        </div>)
                }
            </div>
        );
    }
}

export default Users;