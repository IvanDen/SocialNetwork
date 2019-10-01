import React from 'react';
import Class from './Profileinfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";



const Profileinfo = (props) => {
debugger;
    if (!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div className={Class.mainImg}>
                <img src={'./img/content-img.jpg'} alt="" className="main-img"/>
            </div>
            <div className={Class.userInfo}>
                <img className={Class.avatar} src={
                    props.profile.photos.large != null
                    ? props.profile.photos.small
                    : "./img/myAvatar.png"} alt="avatar" />
                <div className={Class.infoWrap}>
                    <div className={Class.infoText}>
                        <h1>Name: {props.profile.fullName}</h1>
                        <span className={`${Class.infoItemBlock}`}>About me: <span>{props.profile.aboutMe}</span></span>
                        <span className={`${Class.infoItemBlock}`}>looking for a job: <span>{props.profile.lookingForAJob === false ? "no" : "yes"}</span></span>
                        <span className={`${Class.infoItemBlock}`}>looking for a job description: <span>{props.profile.lookingForAJobDescription}</span></span>
                        <span className={`${Class.infoItemBlock}`}>City: Tbilisi</span>
                        <span className={`${Class.infoItemBlock}`}>Education: BSU '11</span>
                        <span className={`${Class.infoItemBlock}`}>Web Site: https://it-kamasutra.com</span>
                    </div>
                    <div>
                        <h2>Contacts</h2>
                        <div className={`${Class.infoItemBlock}`}>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.facebook}`}></span><span className={Class.item}>Facebook: </span><span>{props.profile.contacts.facebook}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.website}`}></span><span className={Class.item}>Website: </span><span>{props.profile.contacts.website}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.vk}`}></span><span className={Class.item}>VK: </span><span>{props.profile.contacts.vk}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.twitter}`}></span><span className={Class.item}>Twitter: </span><span>{props.profile.contacts.twitter}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.instagram}`}></span><span className={Class.item}>Instagram: </span><span>{props.profile.contacts.instagram}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.youtube}`}></span><span className={Class.item}>Youtube: </span><span>{props.profile.contacts.youtube}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.github}`}></span><span className={Class.item}>Github: </span><span>{props.profile.contacts.github}</span>
                            </div>
                            <div className={Class.contactsItem}>
                                <span className={`${Class.imgSocial} ${Class.mainLink}`}></span><span className={Class.item}>MainLink: </span><span>{props.profile.contacts.mainLink}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profileinfo;