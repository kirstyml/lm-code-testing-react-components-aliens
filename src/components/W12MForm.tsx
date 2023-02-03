import { useState } from 'react';
import W12MHeader from './W12MHeader';
import NumberOfBeings from "./number_of_beings";
import SumAnswer from "./sum_answer";
import ReasonForSparing from "./reason_for_sparing";
import SubmitButton from "./submit_button";
import SubmittedInfo from './submitted_info';
import TextInput from './text_input';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState('');
	const [planetName, setPlanetName] = useState('');
	const [numberOfBeings, setNumberOfBeings] = useState('');
	const [sumAnswer, setSumAnswer] = useState('Not 4');
	const [reasonForSparing, setReasonForSparing] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [submittedInfo, setSubmittedInfo] = useState({
		speciesName: '',
		planetName: '',
		numberOfBeings: '',
		sumAnswer: '',
		reasonForSparing: ''
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());
		console.log(formJson);
		const newSubmittedInfo = {
			speciesName: formJson.speciesName as string,
			planetName: formJson.planetName as string,
			numberOfBeings: formJson.numberOfBeings as string,
			sumAnswer: formJson.sumAnswer as string,
			reasonForSparing: formJson.reasonForSparing as string
		}
		setSubmittedInfo(newSubmittedInfo);
		setSubmitted(true);
	};
	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form method="post" onSubmit={handleSubmit}>
				<TextInput
					name='speciesName'
					label="Species name:"
					value={speciesName}
					onChangeTextInput={(event) => setSpeciesName(event.target.value)}
					validationFunctionName='speciesName'
				/>
				<TextInput
					name='planetName'
					label="Planet name:"
					value={planetName}
					onChangeTextInput={(event) => setPlanetName(event.target.value)}
					validationFunctionName='planetName'
				/>
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
				speciesName={submittedInfo.speciesName}
				planetName={submittedInfo.planetName}
				numberOfBeings={submittedInfo.numberOfBeings}
				sumAnswer={submittedInfo.sumAnswer}
				reasonForSparing={submittedInfo.reasonForSparing}
				submitted={submitted}
			/>
		</section>
	);
};

export default W12MForm;
