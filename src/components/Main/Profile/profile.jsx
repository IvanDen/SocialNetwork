import React from 'react';
import Class from './profile.module.css';

import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <div className={Class.mainImg}>
                <img src={'./img/content-img.jpg'} alt="" className="main-img"/>
            </div>
            <div className={Class.userInfo}>
                <img className={Class.avatar} src={"./img/myAvatar.png"} alt="avatar" />
                <div className={Class.infoText}>
                    <h1> Ivan D</h1>
                    <span>Date of Birth: 9 january</span>
                    <span>City: Tbilisi</span>
                    <span>Education: BSU '11</span>
                    <span>Web Site: https://it-kamasutra.com</span>
                </div>
            </div>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;