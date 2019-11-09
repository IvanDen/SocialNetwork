import React from 'react';
import Class from '../Profileinfo.module.css';
import {createField, Input, Textarea} from "../../../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileInfoForm = ({handleSubmit, isOwner, profile, error}) => {
    return (
        <form className={`${Class.info}  ${Class.ownInfo}`} onSubmit={handleSubmit}>
            <div className={`${Class.info}  ${Class.ownInfo}`}>
                {isOwner &&
                <div>
                    <button onClick={() => {}}>Save</button>
                </div>
                }
                {
                    error &&
                    <div className={Class.formSummaryError}>
                        {error}
                    </div>
                }
                <div>
                    <span>Name: </span>
                    {createField("Full name", "fullName", Input, [], {type: "text"})}
                </div>
                <div className={`${Class.infoItemBlock}`}>
                    <span>looking for a job:</span>
                    {createField("", "lookingForAJob", Input, [], {type: "checkbox"})}
                </div>
                <div className={`${Class.infoItemBlock}`}>
                    <span>My professional skills:</span>
                    {createField("My skills", "lookingForAJobDescription", Textarea, [])}
                </div>
                <div className={`${Class.infoItemBlock}`}>
                    <span>About me:</span>
                    {createField("About me:", "aboutMe", Textarea, [])}
                </div>
            </div>
            <div className={`${Class.info} ${Class.socialLinks}`}>
                <h2>Contacts</h2>
                <div className={`${Class.infoItemBlock}`}>
                {//Using the object we generate contacts
                    Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key} className={Class.contactsItem}>
                            <div className={Class.imgTitle}>
                                <span className={`${Class.imgSocial} ${Class[key]}`}></span>
                                <span className={Class.typeMainInfo}>{key}</span>
                            </div>
                            {createField(key, "contacts." + key, Input, [], {type: "text"})}

                        </div>
                        )
                    })
                }
                </div>
            </div>
        </form>
    )
}

//Create a container component using HOC from ReduxForm
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileInfoForm);


//We are returned the container component that we export
export default ProfileDataFormReduxForm;
