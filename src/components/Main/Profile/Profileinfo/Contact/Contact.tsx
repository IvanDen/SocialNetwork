import React from 'react';
import Class from '../Profileinfo.module.css';

type ContactPropsType = {
    contactTitle: string;
    contactValue: string;
    classNameIcon: string;
}

// Create a separate component for contacts
const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue, classNameIcon}) => {
    return (
        <div className={Class.contactsItem}>
            <div className={Class.imgTitle}>
                <span className={`${Class.imgSocial} ${Class[classNameIcon]}`}></span>
                <span className={Class.typeMainInfo}>{contactTitle}</span>
            </div>
            <span className={Class.valMainInfo}>{contactValue}</span>
        </div>
    )
}

export default Contact;
