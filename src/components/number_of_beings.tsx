import React, { useState } from "react";
import ErrorMessage from "./error_message";

export interface NumberOfBeingsProps {
    numberOfBeings: string,
    onChangeNumberOfBeings: (event : React.ChangeEvent<HTMLInputElement>) => void
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings }) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const validate = (value : string) : string | undefined => {
        if(!(/^[0-9]*$/).test(value)) {
            return "Number of beings must be a number"
        }
        if(parseInt(value) < 1000000000) {
            return "Number of beings must be at least 1,000,000,000"
        }
    };

    return (
        <>
            <label htmlFor="numberOfBeings">Number of beings: </label>
            <input 
                id="numberOfBeings"
                name="numberOfBeings" 
                type="number" 
                value={numberOfBeings} 
                onChange={(e) => {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    onChangeNumberOfBeings(e);
                }}
            />
            {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        </>

    )
}

export default NumberOfBeings;