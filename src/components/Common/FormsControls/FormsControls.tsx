import React from "react";
import Class from './FormsControls.module.css';
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../utils/validators";

// const submitMyForm = ({data, props}) => {
//     const { createRecord, reset } = props;
//     return createRecord(data).then(() => {
//         reset();
//         // do other success stuff
//     });
// }

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={Class.formControl + " " + (hasError ? Class.error : "")}>
            <div className={Class.inputWrap}>
                {children}

            </div>
            {hasError && <span>{error}</span>}

        </div>
    );
}


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    // Метод деструктуризации inpus, meta, ...props
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps} />
    </FormControl>
}

export type InputElementRestProps = {
    type?: string
    placeholder?: string
}



export const Input: React.FC<WrappedFieldProps & InputElementRestProps> = (props) => {

    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps} />
        {restProps.type === "checkbox" &&
        <label htmlFor={input.name}>{restProps.placeholder}</label>}
    </FormControl>
}

type LoginFormsValuesType = {
    captcha: string;
    rememberMe: boolean;
    email: string;
    password: string;
}



export function createField<FormKeysType extends string>(placeholder: string | undefined,
                            name: FormKeysType,
                            component: React.FC<WrappedFieldProps & InputElementRestProps>,
                            validateObj: Array<FieldValidatorType>,
                            props = {},
                            text = "") {
    return (
        <div className={Class.formControlWrap}>
            <Field
                placeholder={placeholder}
                name={name}
                component={component}
                validate={validateObj}
                {...props}
            /> {text}
        </div>
    )
}

