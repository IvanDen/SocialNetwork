import React, {ChangeEvent, useState} from 'react';
import Class from './Profileinfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";
import ProfileMainInfo from "./ProfileMainInfo/ProfileMainInfo";
import {ProfileType} from "../../../../Types/types";

type ProfileInfoPropsType = {
    profile: ProfileType | null;
    status: string;
    updateStatus: (newStatus: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
    saveProfile: (formData: ProfileType) => Promise<any>;
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState<boolean>();
    if (!profile){
        return <Preloader />
    }
    const onMainPhotosSelected = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData: ProfileType): Promise<any> => {

        //ToDo: remove then
        const promise = saveProfile(formData);
        promise.then(
            () => {
                setEditMode(false);
            }
        );
        return promise;
    }

    return (
        <div className={Class.userInfo}>
            <div className={`${Class.infoWrap}`}>
                <div className={`${Class.info} ${Class.avaWrap}`}>
                    {isOwner &&
                    <div className={Class.inputFileWrap}>
                        <input
                            type={"file"}
                            id={"avatarImage"}
                            className={Class.inputFile}
                            onChange={onMainPhotosSelected} />
                        <label htmlFor={"avatarImage"}>Choose a photo</label>
                    </div>
                    }
                    <div className={Class.imgWrap}>
                        <img className={Class.avatar}
                             src={profile.photos.large || "./img/list-users.png"}
                             alt="avatar" />
                    </div>

                </div>
            </div>
            {editMode
                ? <ProfileInfoForm
                    initialValues={profile}
                    profile={profile}
                    isOwner={isOwner}
                    onSubmit={onSubmit}
                />
                : <ProfileMainInfo
                    profile={profile}
                    status={status}
                    updateStatus={updateStatus}
                    isOwner={isOwner}
                    goToEditMode={() => {setEditMode(true)}}/>}
        </div>
    );
}

export default ProfileInfo;
