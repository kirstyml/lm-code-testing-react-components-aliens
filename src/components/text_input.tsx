import React, { useState } from "react";
import ErrorMessage from "./error_message";
import { validate } from "./validate";

export interface TextInputProps {
    name: string,
    label: string,
    value: string,
    onChangeTextInput: (event : React.ChangeEvent<HTMLInputElement>) => void,
}

const TextInput: React.FC<TextInputProps> = ({ name, label, value, onChangeTextInput }) => {
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
                    const errorMessage = validate({value: e.target.value, type: name});
                    setErrorMessage(errorMessage);
                    onChangeTextInput(e);
                }}
            />
            {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        </>
    )
}

export default TextInput;