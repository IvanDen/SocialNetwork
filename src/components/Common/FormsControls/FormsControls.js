import React from "react";
import Class from './FormsControls.module.css';
import {Field} from "redux-form";

const submitMyForm = ({data, props}) => {
    const { createRecord, reset } = props;
    return createRecord(data).then(() => {
        reset();
        // do other success stuff
    });
}

const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
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

export const Textarea = (props) => {
    // Метод деструктуризации inpus, meta, ...props
    const {input, meta, child, element, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps} />
    </FormControl>
}

export const Input = (props) => {

    const {input, meta, child, element, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps} />
        {restProps.type === "checkbox" &&
        <label htmlFor={input.name}>{restProps.placeholder}</label>}
    </FormControl>
}

export const createField = (placeholder, name, component, validateObj, props = {}, text = "") => (
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

