import { render, screen, fireEvent } from '@testing-library/react';
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
    it(`Given the input has rendered, 
    when a valid Planet name is entered, 
    then there is no error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const PlanetNameProps: PlanetNameProps = {
            planetName: '',
            onChangePlanetName: mockInputChange
        }
        render(<PlanetName {...PlanetNameProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'Earth' } });
        expect(
            screen.queryByText('Planet name ', { exact: false })
        ).not.toBeInTheDocument();
    });
    it(`Given the input has rendered, 
    when a Planet name that is too short is entered, 
    then there is an error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const PlanetNameProps: PlanetNameProps = {
            planetName: '',
            onChangePlanetName: mockInputChange
        }
        render(<PlanetName {...PlanetNameProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'E' } });
        expect(
            screen.getByText('Planet name must be between', { exact: false })
        ).toBeInTheDocument();
    });
    it(`Given the input has rendered, 
    when a Planet name that is too long is entered, 
    then there is no error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const PlanetNameProps: PlanetNameProps = {
            planetName: '',
            onChangePlanetName: mockInputChange
        }
        render(<PlanetName {...PlanetNameProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm' } });
        expect(
            screen.getByText('Planet name must be between', { exact: false })
        ).toBeInTheDocument();
    });
    it(`Given the input has rendered, 
    when an valid Planet name containing a number is entered, 
    then there is no error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const PlanetNameProps: PlanetNameProps = {
            planetName: '',
            onChangePlanetName: mockInputChange
        }
        render(<PlanetName {...PlanetNameProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'Earth5' } });
        expect(
            screen.queryByText('Planet name ', { exact: false })
        ).not.toBeInTheDocument();
    });
    it(`Given the input has rendered, 
    when an invalid Planet name containing a special character is entered, 
    then there is no error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const PlanetNameProps: PlanetNameProps = {
            planetName: '',
            onChangePlanetName: mockInputChange
        }
        render(<PlanetName {...PlanetNameProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'H!2' } });
        expect(
            screen.getByText('Planet name cannot contain special', { exact: false })
        ).toBeInTheDocument();
    });
})