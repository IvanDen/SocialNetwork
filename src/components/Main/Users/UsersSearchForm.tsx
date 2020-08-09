import {Field, Form, Formik} from "formik";
import React from "react";
import { FilterType } from "../../../redux/users-reduser";

const usersSearchFormValidate = (values: any): any => {
	const errors = {};
	return errors;
}

type FormType = {
	term: string;
	friend: "true" |"false" | "null";
}

type PropsType = {
	onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

	const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
	// To-Do Сделать коректный конвертор значений для селекта
		const filter: FilterType = {
			term: values.term,
			friend: values.friend === "null" ? null : values.friend === "true" ? true : false
		}

		props.onFilterChanged(filter);
		setSubmitting(false);
	}
	return (
		<div>
			<Formik
				initialValues={{term: '', friend: "null"}}
				validate={usersSearchFormValidate}

				onSubmit={submit}
			>
				{({isSubmitting}) => (
					<Form>
						<Field style={{border: '1px solid #000508'}} type="text" name="term"/>
						<Field name="friend" as="select">
							<option value="null">All</option>
							<option value="true">Only followed</option>
							<option value="false">only unfollowed</option>
						</Field>
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
});
