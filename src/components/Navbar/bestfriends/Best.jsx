import React from 'react';
import Class from './best.module.css';


const Best = () => {
    return (
        <div className={Class.friendsWrap}>
            <span className={Class.title}>Friends</span>
            <div className={Class.bestFriends}>
                <div className={Class.itemFriends}>
                    <img src={'./img/posts-user.png'} alt={"ava"}/>
                    <span>Lilia</span>
                </div>
                <div className={Class.itemFriends}>
                    <img src={'./img/posts-user.png'} alt={"ava"}/>
                    <span>Dima</span>
                </div>
                <div className={Class.itemFriends}>
                    <img src={'./img/posts-user.png'} alt={"ava"}/>
                    <span>Misha</span>
                </div>
            </div>
        </div>
    );
}

export default Best;