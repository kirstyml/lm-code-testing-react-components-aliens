import React, { useState } from "react";
import ErrorMessage from "./error_message";

export interface SpeciesNameProps {
    speciesName: string,
    onChangeSpeciesName: (event : React.ChangeEvent<HTMLInputElement>) => void
}

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const validate = (value : string) : string | undefined => {
        if(value.length < 3 || value.length > 23) {
            return "Species name must be between 3 and 23 characters"
        }
        if(!(/^[a-zA-Z]*$/).test(value)) {
            return "Species name cannot contain a number or special character"
        }
    };
    return (
        <>
            <label htmlFor="speciesName">Species Name: </label>
            <input
                id="speciesName"
                name="speciesName"
                type="text"
                value={speciesName}
                onChange={(e) => {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    onChangeSpeciesName(e);
                }}
            />
            {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        </>
    )
}

export default SpeciesName;