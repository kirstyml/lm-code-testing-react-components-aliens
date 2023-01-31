import { useState } from "react";
import SpeciesName from "./species_name";

const FormInputs : React.FC = () => {
    const [speciesName, setSpeciesName] = useState('');
    const [planetName, setPlanetName] = useState('');
    const [numberOfBeings, setNumberOfBeings] = useState('');
    const [sumAnswer, setSumAnswer] = useState('');
    const [reasonForSparing, setReasonForSparing] = useState('');

    return (
        <form action="">
            <SpeciesName speciesName={speciesName} setSpeciesName={setSpeciesName}  />
            {/* <PlanetName />
            <NumberOfBeings />
            <SumAnswer />
            <ReasonForSparing /> */}
            <input type="submit" value="Submit Form" />
        </form>
    )
}

export default FormInputs;