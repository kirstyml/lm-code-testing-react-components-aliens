import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TextInput from './text_input';
import { ValidationFunctionName } from './validate'

describe("TextInput", () => {
    it(`Given the required props, 
        When the component renders, 
        the label text should be present`, () => {
        const TextInputProps = {
            name: 'speciesName',
            label: "Species Name:",
            value: '',
            onChangeTextInput: () => { },
            validationFunctionName: 'speciesName' as ValidationFunctionName
        }
        render(<TextInput {...TextInputProps} />);
        const labelText = screen.getByText("Species Name:");
        expect(labelText).toBeInTheDocument();
    });
    it(`Given the value of the input has been set,
        When the component renders, 
        it should displays the input value`, () => {
        const TextInputProps = {
            name: 'speciesName',
            label: "Species Name:",
            value: 'Earth',
            onChangeTextInput: () => { },
            validationFunctionName: 'speciesName' as ValidationFunctionName
        }
        render(<TextInput {...TextInputProps} />);
        const inputValue = screen.getByDisplayValue('Earth');
        expect(inputValue).toBeInTheDocument();
    });
    it(`Given the input has rendered, 
        when a user types in the input, 
        then the onChange function is called and returns the typed value`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const TextInputProps = {
            name: 'speciesName',
            label: "Species Name:",
            value: '',
            onChangeTextInput: mockInputChange,
            validationFunctionName: 'speciesName' as ValidationFunctionName
        }
        render(<TextInput {...TextInputProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        await userEvent.type(input, 'Human');
        expect(mockInputChange).toHaveBeenCalledTimes(5);
        expect(mockInputChange).toHaveLastReturnedWith("n");
    });

    it(`Given the input has rendered and a validation rule is in place for the name of the input, 
        when a valid value is entered, 
        then there is no error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const TextInputProps = {
            name: 'speciesName',
            label: "Species Name:",
            value: '',
            onChangeTextInput: mockInputChange,
            validationFunctionName: 'speciesName' as ValidationFunctionName
        }
        render(<TextInput {...TextInputProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'Human' } });
        expect(
            screen.queryByText('Species name ', { exact: false })
        ).not.toBeInTheDocument();
    });

    it(`Given the input has rendered, 
        when an invalid value is entered, 
        then there is an error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const TextInputProps = {
            name: 'speciesName',
            label: "Species Name:",
            value: '',
            onChangeTextInput: mockInputChange,
            validationFunctionName: 'speciesName' as ValidationFunctionName
        }
        render(<TextInput {...TextInputProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'Hu' } });
        expect(
            screen.getByText('Species name must be between', { exact: false })
        ).toBeInTheDocument();
    });
})