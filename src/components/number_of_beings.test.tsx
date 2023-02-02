import { render, screen, fireEvent } from '@testing-library/react';
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
    it(`Given the input has rendered, 
    when a valid NumberOfBeings is entered, 
    then there is no error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const numberOfBeingsProps: NumberOfBeingsProps = {
            numberOfBeings: '',
            onChangeNumberOfBeings: mockInputChange
        }
        render(<NumberOfBeings {...numberOfBeingsProps} />);
        const input = screen.getByRole('spinbutton');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: '1000000000' } });
        expect(
            screen.queryByText('Number of beings must be', { exact: false })
        ).not.toBeInTheDocument();
    });
    it(`Given the input has rendered, 
    when a NumberOfBeings that is not a number is entered, 
    then the input does not register it`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const numberOfBeingsProps: NumberOfBeingsProps = {
            numberOfBeings: '',
            onChangeNumberOfBeings: mockInputChange
        }
        render(<NumberOfBeings {...numberOfBeingsProps} />);
        const input = screen.getByRole('spinbutton');
        expect(input).toBeInTheDocument();
        await userEvent.type(input, 'H');
        expect(mockInputChange).toHaveBeenCalledTimes(0);
    });
    it(`Given the input has rendered, 
    when a NumberOfBeings that is too low is entered 
    then there is an error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const NumberOfBeingsProps: NumberOfBeingsProps = {
            numberOfBeings: '',
            onChangeNumberOfBeings: mockInputChange
        }
        render(<NumberOfBeings {...NumberOfBeingsProps} />);
        const input = screen.getByRole('spinbutton');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: '999999999' } });
        expect(
            screen.getByText('Number of beings must be', { exact: false })
        ).toBeInTheDocument();
    });
})