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
            {/*<div className={Class.mainImg}>
                <img src={'./img/content-img.jpg'} alt="" className="main-img"/>
            </div>*/}
            <div className={Class.userInfo}>

                <div className={`${Class.infoWrap}`}>
                    <div className={`${Class.info} ${Class.avaWrap}`}>
                        <img className={Class.avatar} src={
                            profile.photos.large != null
                                ? profile.photos.small
                                : "./img/myAvatar.png"} alt="avatar" />
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
                        <span className={`${Class.infoItemBlock}`}>City: Tbilisi</span>
                        <span className={`${Class.infoItemBlock}`}>Education: BSU '11</span>
                        <span className={`${Class.infoItemBlock}`}>Web Site: https://it-kamasutra.com</span>
                    </div>
                    <div className={`${Class.info} ${Class.socialsLincs}`}>
                        <h2>Contacts</h2>
                        <div className={`${Class.infoItemBlock}`}>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.facebook}`}></span>
                                <span className={Class.item}>Facebook: </span>
                                <span>{profile.contacts.facebook}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.website}`}></span>
                                <span className={Class.item}>Website: </span>
                                <span>{profile.contacts.website}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.vk}`}></span>
                                <span className={Class.item}>VK: </span>
                                <span>{profile.contacts.vk}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.twitter}`}></span>
                                <span className={Class.item}>Twitter: </span>
                                <span>{profile.contacts.twitter}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.instagram}`}></span>
                                <span className={Class.item}>Instagram: </span>
                                <span>{profile.contacts.instagram}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.youtube}`}></span>
                                <span className={Class.item}>Youtube: </span>
                                <span>{profile.contacts.youtube}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.github}`}></span>
                                <span className={Class.item}>Github: </span>
                                <span>{profile.contacts.github}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.mainLink}`}></span>
                                <span className={Class.item}>MainLink: </span>
                                <span>{profile.contacts.mainLink}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profileinfo;