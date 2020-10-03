import {Field, Form, Formik} from "formik";
import React from "react";
import { FilterType } from "../../../redux/users-reduser";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../../redux/users-selectors";

const usersSearchFormValidate = (values: any): any => {
	const errors = {};
	return errors;
}

type FriendFormType = "true" | "false" | "null";
type FormType = {
	term: string;
	friend: FriendFormType;
}

type PropsType = {
	onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

	const filter = useSelector(getUsersFilter);

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
				enableReinitialize
				initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
				validate={usersSearchFormValidate}

				onSubmit={submit}
			>
				{({isSubmitting}) => (
					<Form>
						<Field style={{border: '1px solid #000508'}} type="text" name="term"/>
						<Field name="friend" as="select">
							<option value="null">All</option>
							<option value="false">Only followed</option>
							<option value="true">only unfollowed</option>
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
