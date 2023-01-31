import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import NumberOfBeings, { NumberOfBeingsProps } from './number_of_beings';

describe("NumberOfBeings", () => {
    it(`Given the required props, 
        When the component renders, 
        the NumberOfBeings label should be present`, () => {
        render(<NumberOfBeings numberOfBeings='' onChangeNumberOfBeings={() => { }} />);
        const labelText = screen.getByText("Number of beings:");
        expect(labelText).toBeInTheDocument();
    });
    it(`Given the value of number of beings,
        When the component renders, 
        it should displays the input value`, () => {
        render(<NumberOfBeings numberOfBeings='600' onChangeNumberOfBeings={() => { }} />);
        const inputValue = screen.getByDisplayValue('600');
        expect(inputValue).toBeInTheDocument();
    });
    it(`Given the input has rendered, 
        when a user types in the input, 
        then the onChange function is called and returns the typed value`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const numberOfBeingsProps: NumberOfBeingsProps = {
            numberOfBeings: '',
            onChangeNumberOfBeings: mockInputChange
        }
        render(<NumberOfBeings {...numberOfBeingsProps} />);
        const input = screen.getByRole('spinbutton');
        expect(input).toBeInTheDocument();
        await userEvent.type(input, '9');
        expect(mockInputChange).toHaveBeenCalledTimes(1);
        expect(mockInputChange).toHaveReturnedWith('9');
    });
})