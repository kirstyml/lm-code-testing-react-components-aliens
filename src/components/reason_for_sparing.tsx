import React, { useState } from "react";
import ErrorMessage from "./error_message";

export interface ReasonForSparingProps {
    reasonForSparing: string,
    onChangeReasonForSparing: (event : React.ChangeEvent<HTMLTextAreaElement>) => void
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reasonForSparing, onChangeReasonForSparing }) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const validate = (value : string) : string | undefined => {
        if(value.length < 17 || value.length > 153) {
            return "Reason for sparing must be between 17 and 153 characters"
        }
    };

    return (
        <>
            <label htmlFor="ReasonForSparing">Reason for sparing: </label>
            <textarea
                id="ReasonForSparing" 
                value={reasonForSparing} 
                onChange={(e) => {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    onChangeReasonForSparing(e);
                }}
            />
            {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        </>

    )
}

export default ReasonForSparing;