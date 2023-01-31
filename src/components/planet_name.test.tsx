import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import PlanetName, { PlanetNameProps } from './planet_name';

describe("PlanetName", () => {
    it(`Given the required props, 
        When the component renders, 
        the PlanetName label should be present`, () => {
        render(<PlanetName planetName='' onChangePlanetName={() => { }} />);
        const labelText = screen.getByText("Planet Name:");
        expect(labelText).toBeInTheDocument();
    });
    it(`Given the value of number of beings,
        When the component renders, 
        it should displays the input value`, () => {
        render(<PlanetName planetName='Earth' onChangePlanetName={() => { }} />);
        const inputValue = screen.getByDisplayValue('Earth');
        expect(inputValue).toBeInTheDocument();
    });
    it(`Given the input has rendered, 
        when a user types in the input, 
        then the onChange function is called and returns the typed value`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const PlanetNameProps: PlanetNameProps = {
            planetName: '',
            onChangePlanetName: mockInputChange
        }
        render(<PlanetName {...PlanetNameProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        await userEvent.type(input, 'Earth');
        expect(mockInputChange).toHaveBeenCalledTimes(5);
        expect(mockInputChange).toHaveLastReturnedWith("h");
    });
})