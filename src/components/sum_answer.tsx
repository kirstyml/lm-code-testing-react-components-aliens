import React, { useState } from "react";
import ErrorMessage from "./error_message";

export interface SumAnswerProps {
    sumAnswer: string,
    onChangeSumAnswer: (event : React.ChangeEvent<HTMLSelectElement>) => void
}

const SumAnswer: React.FC<SumAnswerProps> = ({ sumAnswer, onChangeSumAnswer }) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const validate = (value : string) : string | undefined => {
        if(value === "Not 4") {
            return "Incorrect answer."
        }
    };

    return (
        <>
            <label htmlFor="sumAnswer">What is 2 + 2? </label>
            <select 
                id="sumAnswer" 
                value={sumAnswer} 
                onChange={(e) => {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    onChangeSumAnswer(e);
                }}
            >
                <option value="4">4</option>
                <option value="Not 4">Not 4</option>
            </select>
            {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        </>
    )
}

export default SumAnswer;