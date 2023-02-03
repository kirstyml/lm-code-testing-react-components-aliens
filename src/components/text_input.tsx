import React, { useState } from "react";
import ErrorMessage from "./error_message";
import { validate, ValidationFunctionName } from "./validate";

export interface TextInputProps {
    name: string,
    label: string,
    value: string,
    onChangeTextInput: (event : React.ChangeEvent<HTMLInputElement>) => void,
    validationFunctionName: ValidationFunctionName
}

const TextInput: React.FC<TextInputProps> = ({ name, label, value, onChangeTextInput, validationFunctionName }) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type="text"
                value={value}
                onChange={(e) => {
                    const errorMessage = validate({value: e.target.value, validationFunctionName: validationFunctionName});
                    setErrorMessage(errorMessage);
                    onChangeTextInput(e);
                }}
            />
            {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        </>
    )
}

export default TextInput;