import { useState } from "react";
import SpeciesName from "./species_name";
import PlanetName from "./planet_name";
import NumberOfBeings from "./number_of_beings";

const FormInputs : React.FC = () => {
    const [speciesName, setSpeciesName] = useState('');
    const [planetName, setPlanetName] = useState('');
    const [numberOfBeings, setNumberOfBeings] = useState('');
    const [sumAnswer, setSumAnswer] = useState('');
    const [reasonForSparing, setReasonForSparing] = useState('');

    return (
        <form action="">
            <SpeciesName speciesName={speciesName} setSpeciesName={setSpeciesName}  />
            <PlanetName planetName={planetName} setPlanetName={setPlanetName} />
            <NumberOfBeings numberOfBeings={numberOfBeings} setNumberOfBeings={setNumberOfBeings} />
            {/* <SumAnswer />
            <ReasonForSparing /> */}
            <input type="submit" value="Submit Form" />
        </form>
    )
}

export default FormInputs;