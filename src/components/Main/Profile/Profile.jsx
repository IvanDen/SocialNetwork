import React from 'react';
import Class from './profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {

    return (
        <div className={Class.profilePageWrap}>
            <Profileinfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;