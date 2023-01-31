import { render, screen } from '@testing-library/react';
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
    it(`Given the value of number of beings,
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
})