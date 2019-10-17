export const requiredField = (value) => {
    //Check if there is a value in the input field
    if (value)
        return undefined;

    return 'Field is required';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength)
        return `Max length is ${maxLength} symbols`;

    return undefined;
}