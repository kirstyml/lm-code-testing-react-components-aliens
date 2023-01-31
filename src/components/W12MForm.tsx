import { useState } from 'react';
import W12MHeader from './W12MHeader';
import FormInputs from './form_inputs';

const W12MForm = () => {
	return (
		<section className='w12MForm'>
			<W12MHeader />
			<FormInputs />
		</section>
	);
};

export default W12MForm;
