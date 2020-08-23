import React from 'react';
import Class from './Login.module.css';
import {useDispatch, useSelector} from "react-redux";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators";
import {login} from "../../redux/auth-reduser";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

interface ILoginFormOwnProps {
    captchaUrl: string | null
}

const maxLength30 = maxLengthCreator(30);
const LoginForm: React.FC<InjectedFormProps<LoginFormsValuesType, ILoginFormOwnProps> & ILoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", "email", Input, [requiredField, maxLength30], {type: "text"})}
            {createField<LoginFormValuesTypeKeys>("Password", "password", Input, [requiredField, maxLength30], {type: "password"})}
            <div className={Class.checkboxWrap}>
                {createField<LoginFormValuesTypeKeys>("Remember me", "rememberMe", Input, [], {type: "checkbox"})}
            </div>
            {captchaUrl &&
            <div>
                <img src={captchaUrl} />
                {createField<LoginFormValuesTypeKeys>("Captcha", "captcha", Input, [requiredField], {})}
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

const LoginReduxForm = reduxForm<LoginFormsValuesType, ILoginFormOwnProps>({form: 'login'})(LoginForm);

type MapStatePropsType = {
	// captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void;
}

type LoginFormsValuesType = {
    captcha: string;
    rememberMe: boolean;
    email: string;
    password: string;
}
// type LoginFormValuesTypeKeys = keyof LoginFormsValuesType;
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormsValuesType>;

export const LoginPage: React.FC = (props) => {

    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl);
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);

    const dispatch = useDispatch();

    const onSubmit = (formData: LoginFormsValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
    }

    if (isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className={Class.formLogin}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    );
}

