import React, {useState} from 'react';
import Class from './Profileinfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const Profileinfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    let [editMode, ] = useState()
    if (!profile){
        return <Preloader />
    }
    const onMainPhotosSelected = (e) => {

        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
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
                    {editMode
                        ? <ProfileInfoForm
                            profile={profile}
                            status={status}
                            updateStatus={updateStatus}
                            isOwner={isOwner}/>
                        : <ProfileMainInfo
                            profile={profile}
                            status={status}
                            updateStatus={updateStatus}
                            isOwner={isOwner} />}
                    <div className={`${Class.info} ${Class.socialsLincs}`}>
                        <h2>Contacts</h2>
                        <div className={`${Class.infoItemBlock}`}>

                            {//Via Object we generate contacts
                                Object.keys(profile.contacts).map(key => {
                                return <Contact key={key} classNameIcon={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
// Create a separate component for contacts
const Contact = ({contactTitle, contactValue, classNameIcon}) => {
    return (
        <div className={Class.contactsItem}>
            <div className={Class.imgTitle}>
                <span className={`${Class.imgSocial} ${Class[classNameIcon]}`}></span>
                <span className={Class.item}>{contactTitle}</span>
            </div>
            <span className={Class.contactsVal}>{contactValue}</span>
        </div>
    )
}

//We also create a separate component for the main user information
const ProfileMainInfo = ({profile, status, updateStatus, isOwner, goToEditMode}) => {
    return (
        <div className={`${Class.info}  ${Class.ownInfo}`}>
            {isOwner &&
                <div>
                    <button onClick={goToEditMode}>Edit profile</button>
                </div>
            }
            <h1>Name: {profile.fullName}</h1>
            <div className={`${Class.infoItemBlock}`}>
                <span>Status:</span>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                    isOwner={isOwner}/>
            </div>
            <div className={`${Class.infoItemBlock}`}>
                <span>looking for a job:</span>
                <span>{profile.lookingForAJob ? "yes" : "no"}</span>
            </div>
            {//If you are not looking for work then do not show the description of the skill
                profile.lookingForAJob &&
                    <div className={`${Class.infoItemBlock}`}>
                        <span>My professional skills:</span>
                        <span>{profile.lookingForAJobDescription}</span>
                    </div>
            }
            <div className={`${Class.infoItemBlock}`}>
                <span>City:</span>
                <span>{profile.city ? profile.city : "-----"}</span>
            </div>
            <div className={`${Class.infoItemBlock}`}>
                <span>Education:</span>
                <span>{profile.education ? profile.education : "-----"}</span>
            </div>
            <div className={`${Class.infoItemBlock}`}>
                <span>Web Site:</span>
                <span>{profile.site ? profile.site : "-----"}</span>
            </div>
        </div>
    )
}

const ProfileInfoForm = ({isOwner}) => {

}

export default Profileinfo;