import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SumAnswer, { SumAnswerProps } from './sum_answer';

describe("SumAnswer", () => {
    it(`Given the required props, 
        When the component renders, 
        the SumAnswer label should be present`, () => {
        render(<SumAnswer sumAnswer='4' onChangeSumAnswer={() => { }} />);
        const labelText = screen.getByText("What is 2 + 2?");
        expect(labelText).toBeInTheDocument();
    });
    it(`Given the value of the answer to the sum,
        When the component renders, 
        it should displays the that value`, () => {
        render(<SumAnswer sumAnswer='Not 4' onChangeSumAnswer={() => { }} />);
        const selectValue = screen.getByDisplayValue('Not 4');
        expect(selectValue).toBeInTheDocument();
    });
    it(`Given the required props,
        When the component renders, 
        it should contain two options`, () => {
        render(<SumAnswer sumAnswer='Not 4' onChangeSumAnswer={() => { }} />);
        const options = screen.getAllByRole('option');
        expect(options.length).toBe(2);
    });
    it(`Given the input has rendered, 
        when a user types in the input, 
        then the onChange function is called and returns the typed value`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const SumAnswerProps: SumAnswerProps = {
            sumAnswer: '4',
            onChangeSumAnswer: mockInputChange
        }
        render(<SumAnswer {...SumAnswerProps} />);
        const select = screen.getByRole('combobox');
        const option = screen.getByRole('option', { name: 'Not 4' });
        expect(select).toBeInTheDocument();
        expect(option).toBeInTheDocument();
        await userEvent.selectOptions(select, ["Not 4"]);
        expect(mockInputChange).toHaveBeenCalledTimes(1);
        expect(mockInputChange).toHaveLastReturnedWith("Not 4");
        // This assertion doesn't work - is it because the value of the select isn't updated
        // as the setSumAnswer function is now a mock function.
        // expect(select as HTMLSelectElement).toHaveValue("Not 4");
    });
    it(`Given the input has rendered, 
    when a valid SumAnswer is entered, 
    then there is no error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const SumAnswerProps: SumAnswerProps = {
            sumAnswer: '',
            onChangeSumAnswer: mockInputChange
        }
        render(<SumAnswer {...SumAnswerProps} />);
        const input = screen.getByRole('combobox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: '4' } });
        expect(
            screen.queryByText('Incorrect answer.', { exact: false })
        ).not.toBeInTheDocument();
    });
    it(`Given the input has rendered, 
    when a SumAnswer that is incorrect is entered 
    then there is an error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const SumAnswerProps: SumAnswerProps = {
            sumAnswer: '',
            onChangeSumAnswer: mockInputChange
        }
        render(<SumAnswer {...SumAnswerProps} />);
        const input = screen.getByRole('combobox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'Not 4' } });
        expect(
            screen.getByText('Incorrect answer.', { exact: false })
        ).toBeInTheDocument();
    });
})