import React from 'react';
import Class from './Profileinfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const Profileinfo = ({profile, status, updateStatus, ...props}) => {
    if (!profile){
        return <Preloader />
    }
    return (
        <div>
            <div className={Class.userInfo}>

                <div className={`${Class.infoWrap}`}>
                    <div className={`${Class.info} ${Class.avaWrap}`}>

                        {profile.userId != 1617
                            ? profile.photos.large != null
                                ? <img className={Class.avatar} src={profile.photos.large} alt="avatar" />
                                : <img className={Class.avatar} src={profile.photos.small != null ? profile.photos.small : "./img/list-users.png"} alt="avatar" />
                            : <img className={Class.avatar} src={"./img/myAvatar.png"} alt="avatar" />
                        }

                    </div>
                    <div className={`${Class.info}  ${Class.ownInfo}`}>
                        <h1>Name: {profile.fullName}</h1>

                        <span className={`${Class.infoItemBlock}`}>
                            Status: <ProfileStatusWithHooks
                            status={status}
                            updateStatus={updateStatus} />
                        </span>

                        <span className={`${Class.infoItemBlock}`}>
                            looking for a job: <span>{profile.lookingForAJob === false ? "no" : "yes"}</span>
                        </span>
                        <span className={`${Class.infoItemBlock}`}>
                            looking for a job description: <span>{profile.lookingForAJobDescription}</span>
                        </span>
                        <span className={`${Class.infoItemBlock}`}>City: {profile.city ? profile.city : "-----"}</span>
                        <span className={`${Class.infoItemBlock}`}>Education: {profile.education ? profile.education : "-----"}</span>
                        <span className={`${Class.infoItemBlock}`}>Web Site: {profile.site ? profile.site : "-----"}</span>
                    </div>
                    <div className={`${Class.info} ${Class.socialsLincs}`}>
                        <h2>Contacts</h2>
                        <div className={`${Class.infoItemBlock}`}>
                            <div className={Class.contactsItem}>
                                <div className={Class.imgTitle}>
                                    <span className={`${Class.imgSocial} ${Class.facebook}`}></span>
                                    <span className={Class.item}>Facebook: </span>
                                </div>
                                <span className={Class.contactsVal}>{profile.contacts.facebook}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <div className={Class.imgTitle}>
                                    <span className={`${Class.imgSocial} ${Class.website}`}></span>
                                    <span className={Class.item}>Website: </span>
                                </div>
                                <span className={Class.contactsVal}>{profile.contacts.website}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <div className={Class.imgTitle}>
                                    <span className={`${Class.imgSocial} ${Class.vk}`}></span>
                                    <span className={Class.item}>VK: </span>
                                </div>
                                <span className={Class.contactsVal}>{profile.contacts.vk}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <div className={Class.imgTitle}>
                                    <span className={`${Class.imgSocial} ${Class.twitter}`}></span>
                                    <span className={Class.item}>Twitter: </span>
                                </div>
                                <span className={Class.contactsVal}>{profile.contacts.twitter}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <div className={Class.imgTitle}>
                                    <span className={`${Class.imgSocial} ${Class.instagram}`}></span>
                                    <span className={Class.item}>Instagram: </span>
                                </div>
                                <span className={Class.contactsVal}>{profile.contacts.instagram}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <div className={Class.imgTitle}>
                                    <span className={`${Class.imgSocial} ${Class.youtube}`}></span>
                                    <span className={Class.item}>Youtube: </span>
                                </div>
                                <span className={Class.contactsVal}>{profile.contacts.youtube}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <div className={Class.imgTitle}>
                                    <span className={`${Class.imgSocial} ${Class.github}`}></span>
                                    <span className={Class.item}>Github: </span>
                                </div>
                                <span className={Class.contactsVal}>{profile.contacts.github}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <div className={Class.imgTitle}>
                                    <span className={`${Class.imgSocial} ${Class.mainLink}`}></span>
                                    <span className={Class.item}>MainLink: </span>
                                </div>
                                <span className={Class.contactsVal}>{profile.contacts.mainLink}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profileinfo;