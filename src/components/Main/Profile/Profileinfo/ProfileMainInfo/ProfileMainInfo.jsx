import React from 'react';
import Class from '../Profileinfo.module.css';
import Contact from "../Contact/Contact";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";



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
                <span>About me:</span>
                <span>{profile.aboutMe ? profile.aboutMe : "-----"}</span>
            </div>
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
            <div className={`${Class.info} ${Class.socialLinks}`}>
                <h2>Contacts</h2>
                <div className={`${Class.infoItemBlock}`}>

                    {//Using the object we generate contacts
                        Object.keys(profile.contacts).map(key => {
                            return <Contact key={key} classNameIcon={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                        })}
                </div>
            </div>
        </div>
    )
}
export default ProfileMainInfo;