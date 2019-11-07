import React from 'react';
import Styles from './Login.module.css';

import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators";
import {login} from "../../redux/auth-reduser";
import {Redirect} from "react-router-dom";


const maxLength30 = maxLengthCreator(30);
const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={Styles.formLogin}>
            <h1>Login</h1>
            <div className={Styles.emailInput}>
                {createField("Email", "email", Input, [requiredField, maxLength30], {type: "text"},)}
            </div>
            <div className={Styles.passwInput}>
                {createField("Password", "password", Input, [requiredField, maxLength30], {type: "password"})}
            </div>
                {createField(null, "rememberMe", Input, [], {type: "checkbox"}, "remember me")}
            {
                error &&
                <div className={Styles.formSummaryError}>
                    {error}
                </div>
            }
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