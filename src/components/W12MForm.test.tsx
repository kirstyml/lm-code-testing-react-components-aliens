import { render, screen } from '@testing-library/react';
import W12MForm from './W12MForm';
import userEvent from '@testing-library/user-event';

test('renders form element', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	const { container } = render(<W12MForm />);

	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
	expect(container.firstChild).toHaveClass('w12MForm');
});

test(`Given the form has been filled out,
	When the submit button is pressed
	Then the onSubmit is fired`, async () => {
	render(<W12MForm />);
	const submitButton = screen.getByRole('button');
	expect(submitButton).toBeInTheDocument();
	const labelText = screen.queryByText("Species:");
	expect(labelText).not.toBeInTheDocument();
	await userEvent.click(submitButton);
	const firstlabelText = screen.getByText("Species:");
	expect(firstlabelText).toBeInTheDocument();
});
