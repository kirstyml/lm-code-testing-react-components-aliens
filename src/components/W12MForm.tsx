import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from "./species_name";
import PlanetName from "./planet_name";
import NumberOfBeings from "./number_of_beings";
import SumAnswer from "./sum_answer";
import ReasonForSparing from "./reason_for_sparing";
import SubmitButton from "./submit_button";
import SubmittedInfo from './submitted_info';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState('');
	const [planetName, setPlanetName] = useState('');
	const [numberOfBeings, setNumberOfBeings] = useState('');
	const [sumAnswer, setSumAnswer] = useState('Not 4');
	const [reasonForSparing, setReasonForSparing] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		console.log(`speciesName: ${speciesName}`);
		console.log(`planetName: ${planetName}`);
		console.log(`numberOfBeings: ${numberOfBeings}`);
		console.log(`sumAnswer: ${sumAnswer}`);
		console.log(`reasonForSparing: ${reasonForSparing}`);
		setSubmitted(true);
		event.preventDefault();
	};
	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form onSubmit={(event) => handleSubmit(event)}>
				<SpeciesName
					speciesName={speciesName}
					onChangeSpeciesName={(event) => setSpeciesName(event.target.value)} />
				<PlanetName
					planetName={planetName}
					onChangePlanetName={(event) => setPlanetName(event.target.value)} />
				<NumberOfBeings
					numberOfBeings={numberOfBeings}
					onChangeNumberOfBeings={(event) => setNumberOfBeings(event.target.value)} />
				<SumAnswer
					sumAnswer={sumAnswer}
					onChangeSumAnswer={(event) => setSumAnswer(event.target.value)} />
				<ReasonForSparing
					reasonForSparing={reasonForSparing}
					onChangeReasonForSparing={(event) => setReasonForSparing(event.target.value)} />
				<SubmitButton />
			</form>
			<SubmittedInfo
				speciesName={speciesName}
				planetName={planetName}
				numberOfBeings={numberOfBeings}
				sumAnswer={sumAnswer}
				reasonForSparing={reasonForSparing}
				submitted={submitted}
			/>
		</section>
	);
};

export default W12MForm;
