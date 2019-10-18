import React from "react";
import Styles from './FormsControls.module.css';


const FormControl = ({input, meta, child, element, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={Styles.formControl + " " + (hasError ? Styles.error : "")}>
            <div className={Styles.inputWrap}>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}

        </div>
    );
}

export const Textarea = (props) => {
    // Метод деструктуризации inpus, meta, ...props
    const {input, meta, child, element, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, element, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}