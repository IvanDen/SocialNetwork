import React from 'react';
import Class from './Login.module.css';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators";
import {login} from "../../redux/auth-reduser";


const maxLength30 = maxLengthCreator(30);
const LoginForm = (props) => {
    console.log("RENDER");
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Email"}
                    name={"email"}
                    component={Input}
                    validate={[requiredField, maxLength30]} />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    type={"password"}
                    name={"password"}
                    component={Input}
                    validate={[requiredField, maxLength30]} />
            </div>
            <div>
                <Field
                    component={Input}
                    name={"rememberMe"}
                    type={"checkbox"}
                    validate={[requiredField, maxLength30]} />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default connect(null, {login})(Login);