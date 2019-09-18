import React from 'react';

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {

    return (
        <div>
            <Profileinfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;