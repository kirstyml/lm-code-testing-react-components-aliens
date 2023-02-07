import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SpeciesName, { SpeciesNameProps } from './species_name';

describe("SpeciesName", () => {
    it(`Given the required props, 
        When the component renders, 
        the SpeciesName label should be present`, () => {
        render(<SpeciesName speciesName='' onChangeSpeciesName={() => { }} />);
        const labelText = screen.getByText("Species Name:");
        expect(labelText).toBeInTheDocument();
    });
    it(`Given the value of species name,
        When the component renders, 
        it should displays the input value`, () => {
        render(<SpeciesName speciesName='Earth' onChangeSpeciesName={() => { }} />);
        const inputValue = screen.getByDisplayValue('Earth');
        expect(inputValue).toBeInTheDocument();
    });
    it(`Given the input has rendered, 
        when a user types in the input, 
        then the onChange function is called and returns the typed value`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const SpeciesNameProps: SpeciesNameProps = {
            speciesName: '',
            onChangeSpeciesName: mockInputChange
        }
        render(<SpeciesName {...SpeciesNameProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        await userEvent.type(input, 'Human');
        expect(mockInputChange).toHaveBeenCalledTimes(5);
        expect(mockInputChange).toHaveLastReturnedWith("n");
    });
    it(`Given the input has rendered, 
        when a valid species name is entered, 
        then there is no error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const SpeciesNameProps: SpeciesNameProps = {
            speciesName: '',
            onChangeSpeciesName: mockInputChange
        }
        render(<SpeciesName {...SpeciesNameProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'Human' } });
        expect(
            screen.queryByText('Species name ', { exact: false })
        ).not.toBeInTheDocument();
    });
    it(`Given the input has rendered, 
        when a species name that is too short is entered, 
        then there is an error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const SpeciesNameProps: SpeciesNameProps = {
            speciesName: '',
            onChangeSpeciesName: mockInputChange
        }
        render(<SpeciesName {...SpeciesNameProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'Hu' } });
        expect(
            screen.getByText('Species name must be between', { exact: false })
        ).toBeInTheDocument();
    });
    it(`Given the input has rendered, 
        when a species name that is too long is entered, 
        then there is an error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const SpeciesNameProps: SpeciesNameProps = {
            speciesName: '',
            onChangeSpeciesName: mockInputChange
        }
        render(<SpeciesName {...SpeciesNameProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'qwertyuiopasdfghjklzxcvbnm' } });
        expect(
            screen.getByText('Species name must be between', { exact: false })
        ).toBeInTheDocument();
    });
    it(`Given the input has rendered, 
        when an invalid species name containing a number is entered, 
        then there is an error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const SpeciesNameProps: SpeciesNameProps = {
            speciesName: '',
            onChangeSpeciesName: mockInputChange
        }
        render(<SpeciesName {...SpeciesNameProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'Human5' } });
        expect(
            screen.getByText('Species name cannot contain a', { exact: false })
        ).toBeInTheDocument();
    });
    it(`Given the input has rendered, 
        when an invalid species name containing a special character is entered, 
        then there is an error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const SpeciesNameProps: SpeciesNameProps = {
            speciesName: '',
            onChangeSpeciesName: mockInputChange
        }
        render(<SpeciesName {...SpeciesNameProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'H!2' } });
        expect(
            screen.getByText('Species name cannot contain a', { exact: false })
        ).toBeInTheDocument();
    });
})