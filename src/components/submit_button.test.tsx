import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SubmitButton from './submit_button';

describe("SubmitButton", () => {
    it(`Given the required props, 
        When the component renders, 
        the SubmitButton label should be present`, () => {
        render(<SubmitButton />);
        const labelText = screen.getByText("Submit Form");
        expect(labelText).toBeInTheDocument();
    });
    it(`Given the input has rendered, 
        when a user clicks the SubmitButton, 
        then the submit function is called`, async () => {
        const onSubmit = jest.fn(e => e.preventDefault());
        render(<SubmitButton />, { wrapper: ({ children }) => <form onSubmit={onSubmit}>{children}</form> });
        const input = screen.getByRole('button');
        expect(input).toBeInTheDocument();
        await userEvent.click(input);
        expect(onSubmit).toHaveBeenCalledTimes(1);
    });
})