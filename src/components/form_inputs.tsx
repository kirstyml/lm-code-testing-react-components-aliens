import { useState } from "react";
import SpeciesName from "./species_name";
import PlanetName from "./planet_name";
import NumberOfBeings from "./number_of_beings";
import SumAnswer from "./sum_answer";
import ReasonForSparing from "./reason_for_sparing";

const FormInputs : React.FC = () => {
    const [speciesName, setSpeciesName] = useState('');
    const [planetName, setPlanetName] = useState('');
    const [numberOfBeings, setNumberOfBeings] = useState('');
    const [sumAnswer, setSumAnswer] = useState('Not 4');
    const [reasonForSparing, setReasonForSparing] = useState('');

    return (
        <form action="">
            <SpeciesName speciesName={speciesName} setSpeciesName={setSpeciesName}  />
            <PlanetName planetName={planetName} setPlanetName={setPlanetName} />
            <NumberOfBeings numberOfBeings={numberOfBeings} setNumberOfBeings={setNumberOfBeings} />
            <SumAnswer sumAnswer={sumAnswer} setSumAnswer={setSumAnswer} />
            <ReasonForSparing reasonForSparing={reasonForSparing} setReasonForSparing={setReasonForSparing} />
            <input type="submit" value="Submit Form" />
        </form>
    )
}

export default FormInputs;