import React, { useState } from "react";
import ErrorMessage from "./error_message";

export interface PlanetNameProps {
    planetName: string,
    onChangePlanetName: (event : React.ChangeEvent<HTMLInputElement>) => void
}

const PlanetName: React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName }) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const validate = (value : string) : string | undefined => {
        if(value.length < 2 || value.length > 49) {
            return "Planet name must be between 2 and 49 characters"
        }
        if(!(/^[a-zA-Z0-9]*$/).test(value)) {
            return "Planet name cannot contain special characters"
        }
    };

    return (
        <>
            <label htmlFor="planetName">Planet Name: </label>
            <input 
                id="planetName" 
                type="text" 
                value={planetName} 
                onChange={(e) => {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    onChangePlanetName(e);
                }}
            />
            {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        </>

    )
}

export default PlanetName;