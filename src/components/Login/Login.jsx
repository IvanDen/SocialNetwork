import React from 'react';
import Class from './Login.module.css';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators";
import {login} from "../../redux/auth-reduser";
import {Redirect} from "react-router-dom";


const maxLength30 = maxLengthCreator(30);
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", Input, [requiredField, maxLength30], {type: "text"})}
            {createField("Password", "password", Input, [requiredField, maxLength30], {type: "password"})}
            <div className={Class.checkboxWrap}>
                {createField("Remember me", "rememberMe", Input, [], {type: "checkbox"})}
            </div>
            {captchaUrl &&
            <div>
                <img src={captchaUrl} />
                {createField("Captcha", "captcha", Input, [requiredField], {})}
            </div>
            }
            {error &&
            <div className={Class.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className={Class.formLogin}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth

});

export default connect(mapStateToProps, {login})(Login);