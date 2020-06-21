import React from 'react';
import Class from './profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {ProfileType} from "../../../Types/types";

type ProfilePropsType = {
    profile: ProfileType | null;
    status: string;
    updateStatus: (newStatus: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
    saveProfile: (formData: ProfileType) => Promise<any>;
    isAuth: boolean;

}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div className={Class.profilePageWrap}>
            <ProfileInfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                saveProfile={props.saveProfile}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
