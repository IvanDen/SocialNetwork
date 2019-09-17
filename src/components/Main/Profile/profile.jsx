import React from 'react';

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {

    return (
        <div>
            <Profileinfo />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;