import React from 'react';
import * as axios from 'axios';
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });
        // props.setUsers([
        //     {id: 1, photoUrl: './img/list-users.png', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        //     {id: 2, photoUrl: './img/list-users.png', followed: true, fullName: 'Olga', status: 'I am Happy!', location: {city: 'Moscow', country: 'Russia'}},
        //     {id: 3, photoUrl: './img/list-users.png', followed: true, fullName: 'Lilia', status: 'Hello there', location: {city: 'Tbilisi', country: 'Georgia'}},
        //     {id: 4, photoUrl: './img/list-users.png', followed: true, fullName: 'Vitya', status: 'I am a Job', location: {city: 'Minsk', country: 'Belarus'}},
        //     {id: 5, photoUrl: './img/list-users.png', followed: false, fullName: 'Stas', status: 'Job :(', location: {city: 'Tbilisi', country: 'Georgia'}},
        //     {id: 6, photoUrl: './img/list-users.png', followed: false, fullName: 'Robot', status: 'right now?', location: {city: 'Moscow', country: 'Russia'}},
        //     {id: 7, photoUrl: './img/list-users.png', followed: false, fullName: 'Nagibator', status: 'looking', location: {city: 'Minsk', country: 'Belarus'}},
        // ]);
    }

    return (
      <div>
          {
              props.users.map(user =>
                  <div key={user.id}>
                      <span>
                          <div>
                              <img src={user.photos.small != null ? user.photos.small : "./img/list-users.png"} className={styles.avatar} />
                          </div>
                          <div>
                              {user.followed
                                  ? <button className={`${styles.subscribe} button`} onClick={() => [props.unfollow(user.id)]}>Unfollow</button>
                                  : <button className={`${styles.subscribe} button`} onClick={() => [props.follow(user.id)]}>Follow</button>}
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
};

export default Users;