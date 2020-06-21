import Class from "../MyPosts.module.css";
import {createField, GetStringKeys, Textarea} from "../../../../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../../../utils/validators";
import {InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

// Create a separate component for the form
const maxLength10 = maxLengthCreator(30);

type NewPostFormPropsType = {

}
export type NewPostFormValuesType = {
	newPostText: string;
}

// type LoginFormValuesTypeKeys = Extract<keyof LoginFormsValuesType, string>;
type NewPostFormValuesTypeKeys = GetStringKeys<NewPostFormValuesType>;



const AddNewPostForm: React.FC<InjectedFormProps<NewPostFormValuesType, NewPostFormPropsType> & NewPostFormPropsType> = (props) => {

	return(
		<form className={Class.postForm} onSubmit={props.handleSubmit}>
			{createField<NewPostFormValuesTypeKeys>("Post message", "newPostText", Textarea, [requiredField, maxLength10])}
			<button>Add post</button>
		</form>
	);
}

export const AddNewPostFormRedux = reduxForm<NewPostFormValuesType, NewPostFormPropsType>({form: "ProfileAddNewPostForm"})(AddNewPostForm);
