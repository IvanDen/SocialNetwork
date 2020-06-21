import React from 'react';
import Class from '../Profileinfo.module.css';
import Contact from "../Contact/Contact";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import { ContactsType, ProfileType } from '../../../../../Types/types';

type ProfileMainInfoPropsTpe = {
    profile: ProfileType;
    status: string;
    updateStatus: (newStatus: string) => void;
    isOwner: boolean;
    goToEditMode: () => void;
}

//We also create a separate component for the main user information
const ProfileMainInfo: React.FC<ProfileMainInfoPropsTpe> = ({profile, status, updateStatus, isOwner, goToEditMode}) => {
    return (
        <div className={`${Class.info}  ${Class.ownInfo}`}>
            {isOwner &&
            <div>
                <button onClick={goToEditMode}>Edit profile</button>
            </div>
            }
            <h1>Name: {profile.fullName}</h1>
            <div className={`${Class.infoItemBlock}`}>
                <span className={Class.typeMainInfo}>Status:</span>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                    isOwner={isOwner}/>
            </div>
            <div className={`${Class.infoItemBlock}`}>
                <span className={Class.typeMainInfo}>looking for a job:</span>
                <span className={Class.valMainInfo}>{profile.lookingForAJob ? "yes" : "no"}</span>
            </div>
            {//If you are not looking for work then do not show the description of the skill
                profile.lookingForAJob &&
                <div className={`${Class.infoItemBlock}`}>
                    <span className={Class.typeMainInfo}>My professional skills:</span>
                    <span className={Class.valMainInfo}>{profile.lookingForAJobDescription}</span>
                </div>
            }
            <div className={`${Class.infoItemBlock}`}>
                <span className={Class.typeMainInfo}>About me:</span>
                <span className={Class.valMainInfo}>{profile.aboutMe ? profile.aboutMe : "-----"}</span>
            </div>
            <div className={`${Class.info} ${Class.socialLinks}`}>
                <h2>Contacts</h2>
                <div className={`${Class.infoItemBlock}`}>
                    {//Using the object we generate contacts
                        Object.keys(profile.contacts).map(key => {
                            return <Contact key={key} classNameIcon={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
                        })}
                </div>
            </div>
        </div>
    )
}
export default ProfileMainInfo;
