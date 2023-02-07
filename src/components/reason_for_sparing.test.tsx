import { render, screen, fireEvent } from '@testing-library/react';
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
    it(`Given the value of reason for sparing,
        When the component renders, 
        it should display the input value`, () => {
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
    it(`Given the input has rendered, 
    when a valid reason for sparing is entered, 
    then there is no error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const ReasonForSparingProps: ReasonForSparingProps = {
            reasonForSparing: '',
            onChangeReasonForSparing: mockInputChange
        }
        render(<ReasonForSparing {...ReasonForSparingProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'qwertyuiopasdfghj' } });
        expect(
            screen.queryByText('Reason for sparing must be', { exact: false })
        ).not.toBeInTheDocument();
    });
    it(`Given the input has rendered, 
    when a reason for sparing that is too short is entered, 
    then there is an error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const ReasonForSparingProps: ReasonForSparingProps = {
            reasonForSparing: '',
            onChangeReasonForSparing: mockInputChange
        }
        render(<ReasonForSparing {...ReasonForSparingProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'qwertyuiopasdfgh' } });
        expect(
            screen.getByText('Reason for sparing must be', { exact: false })
        ).toBeInTheDocument();
    });
    it(`Given the input has rendered, 
    when a reason for sparing that is too long is entered, 
    then there is an error message present`, async () => {
        const mockInputChange = jest.fn(e => e.target.value);
        const ReasonForSparingProps: ReasonForSparingProps = {
            reasonForSparing: '',
            onChangeReasonForSparing: mockInputChange
        }
        render(<ReasonForSparing {...ReasonForSparingProps} />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'weweferg erg3g3geg gergergrbrthrt fgrehhfherhw4h gwgh45hwrgsrgwrwegsdfg gewrgw45rgdsfgwregwwtwergdfgdfsfghcbergiugvsfdbvewrbogbhsdouvboweubrgoubwegoubguegjbrgubew' } });
        expect(
            screen.getByText('Reason for sparing must be', { exact: false })
        ).toBeInTheDocument();
    });
})