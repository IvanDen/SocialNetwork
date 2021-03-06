import React from 'react';
import Class from '../Profileinfo.module.css';
import {createField, GetStringKeys, Input, Textarea} from "../../../../Common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../../../Types/types";

type ProfileInfoFormPropsType = {
	profile: ProfileType;
	isOwner: boolean;
}

type ProfileTypeKeys = GetStringKeys<ProfileType>;

const ProfileInfoForm: React.FC<InjectedFormProps<ProfileType, ProfileInfoFormPropsType> & ProfileInfoFormPropsType> = ({handleSubmit, isOwner, profile, error}) => {
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
                    {createField<ProfileTypeKeys>("Full name", "fullName", Input, [], {type: "text"})}
                </div>
                <div className={`${Class.infoItemBlock}`}>
                    <span>looking for a job:</span>
                    {createField<ProfileTypeKeys>("", "lookingForAJob", Input, [], {type: "checkbox"})}
                </div>
                <div className={`${Class.infoItemBlock}`}>
                    <span>My professional skills:</span>
                    {createField<ProfileTypeKeys>("My skills", "lookingForAJobDescription", Textarea, [])}
                </div>
                <div className={`${Class.infoItemBlock}`}>
                    <span>About me:</span>
                    {createField<ProfileTypeKeys>("About me:", "aboutMe", Textarea, [])}
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
							{/*todo: create some solution for embedded objects*/}
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
const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileInfoFormPropsType>({form: 'edit-profile'})(ProfileInfoForm);


//We are returned the container component that we export
export default ProfileDataFormReduxForm;
