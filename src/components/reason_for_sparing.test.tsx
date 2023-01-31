import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ReasonForSparing, { ReasonForSparingProps } from './reason_for_sparing';

describe("ReasonForSparing", () => {
    it(`Given the required props, 
        When the component renders, 
        the ReasonForSparing label should be present`, () => {
        render(<ReasonForSparing reasonForSparing='' onChangeReasonForSparing={() => { }} />);
        const labelText = screen.getByText("Reason for sparing:");
        expect(labelText).toBeInTheDocument();
    });
    it(`Given the value of number of beings,
        When the component renders, 
        it should displays the input value`, () => {
        render(<ReasonForSparing reasonForSparing='Earth' onChangeReasonForSparing={() => { }} />);
        const inputValue = screen.getByDisplayValue('Earth');
        expect(inputValue).toBeInTheDocument();
    });
    it(`Given the input has rendered, 
        when a user types in the input, 
        then the onChange function is called and returns the typed value`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const ReasonForSparingProps: ReasonForSparingProps = {
            reasonForSparing: '',
            onChangeReasonForSparing: mockInputChange
        }
        render(<ReasonForSparing {...ReasonForSparingProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        await userEvent.type(input, 'Earth');
        expect(mockInputChange).toHaveBeenCalledTimes(5);
        expect(mockInputChange).toHaveLastReturnedWith("h");
    });
})