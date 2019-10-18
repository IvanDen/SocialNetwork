import React from 'react';
import Styles from './Login.module.css';

import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators";
import {login} from "../../redux/auth-reduser";
import {Redirect} from "react-router-dom";


const maxLength30 = maxLengthCreator(30);
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={Styles.formLogin}>
            <h1>Login</h1>
            <div className={Styles.emailInput}>
                <Field
                    placeholder={"Email"}
                    name={"email"}
                    component={Input}
                    validate={[requiredField, maxLength30]} />
            </div>
            <div className={Styles.passwInput}>
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
                     />
            </div>
            {props.error && <div className={Styles.formSummaryError}>
                {props.error}
            </div>}
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

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);