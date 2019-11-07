import React, {useState} from 'react';
import Class from './Profileinfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";
import ProfileMainInfo from "./ProfileMainInfo/ProfileMainInfo";



const Profileinfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState();
    if (!profile){
        return <Preloader />
    }
    const onMainPhotosSelected = (e) => {

        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={Class.userInfo}>
            <div className={`${Class.infoWrap}`}>
                <div className={`${Class.info} ${Class.avaWrap}`}>
                    <div className={Class.imgWrap}>
                        <img className={Class.avatar}
                             src={profile.photos.large || "./img/list-users.png"}
                             alt="avatar" />
                    </div>
                    {isOwner &&
                        <div className={Class.inputFileWrap}>
                            <input
                                type={"file"}
                                id={"avatarImage"}
                                className={Class.inputFile}
                                onChange={onMainPhotosSelected} />
                            <label htmlFor={"avatarImage"}>Choose a file</label>
                        </div>
                    }
                </div>
            </div>
            {editMode
                ? <ProfileInfoForm
                    initialValues={profile}
                    profile={profile}
                    status={status}
                    updateStatus={updateStatus}
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

export default Profileinfo;