import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import NumberOfBeings, {NumberOfBeingsProps} from './number_of_beings';

describe("NumberOfBeings", () => {
    it("renders NumberOfBeings input", () => {
        render(<NumberOfBeings numberOfBeings='' onChangeNumberOfBeings={() => {}} />);
        const labelText = screen.getByText("Number of beings:");
        expect(labelText).toBeInTheDocument();
    });
    it("displays the input value", () => {
        render(<NumberOfBeings numberOfBeings='600' onChangeNumberOfBeings={() => {}} />);
        const inputValue = screen.getByDisplayValue('600');
        expect(inputValue).toBeInTheDocument();
    });
    it("calls the onChange function when it is updated",async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const numberOfBeingsProps : NumberOfBeingsProps = {
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