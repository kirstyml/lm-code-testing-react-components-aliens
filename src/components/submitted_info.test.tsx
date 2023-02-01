import { render, screen } from '@testing-library/react';
import SubmittedInfo, { SubmittedInfoProps } from './submitted_info';

describe("SubmittedInfo", () => {
    it(`Given the required props and the form has been submitted, 
        When the component renders, 
        all of the submitted information should be present`, () => {
        const SubmittedInfoProps: SubmittedInfoProps = {
            speciesName: 'Humans',
            planetName: 'Earth',
            numberOfBeings: '3',
            sumAnswer: '4',
            reasonForSparing: 'please',
            submitted: true
        }
        render(<SubmittedInfo {...SubmittedInfoProps} />);
        const labelText = screen.getByText("Submitted Information:");
        expect(labelText).toBeInTheDocument();
        const speciesName = screen.getByText(SubmittedInfoProps.speciesName, { exact: false });
        expect(speciesName).toBeInTheDocument();
        const planetName = screen.getByText(SubmittedInfoProps.planetName, { exact: false });
        expect(planetName).toBeInTheDocument();
        const numberOfBeings = screen.getByText(SubmittedInfoProps.numberOfBeings, { exact: false });
        expect(numberOfBeings).toBeInTheDocument();
        const sumAnswer = screen.getByText(SubmittedInfoProps.sumAnswer, { exact: false });
        expect(sumAnswer).toBeInTheDocument();
        const reasonForSparing = screen.getByText(SubmittedInfoProps.reasonForSparing, { exact: false });
        expect(reasonForSparing).toBeInTheDocument();
    });
    it(`Given the required props and the form has not been submitted, 
        When the component renders, 
        only the title should be present`, () => {
        const SubmittedInfoProps: SubmittedInfoProps = {
            speciesName: 'Humans',
            planetName: 'Earth',
            numberOfBeings: '3',
            sumAnswer: '4',
            reasonForSparing: 'please',
            submitted: false
        }
        render(<SubmittedInfo {...SubmittedInfoProps} />);
        const labelText = screen.getByText("Submitted Information:");
        expect(labelText).toBeInTheDocument();
        const speciesName = screen.queryByText(SubmittedInfoProps.speciesName, { exact: false });
        expect(speciesName).toBeNull();
        const planetName = screen.queryByText(SubmittedInfoProps.planetName, { exact: false });
        expect(planetName).toBeNull();
        const numberOfBeings = screen.queryByText(SubmittedInfoProps.numberOfBeings, { exact: false });
        expect(numberOfBeings).toBeNull();
        const sumAnswer = screen.queryByText(SubmittedInfoProps.sumAnswer, { exact: false });
        expect(sumAnswer).toBeNull();
        const reasonForSparing = screen.queryByText(SubmittedInfoProps.reasonForSparing, { exact: false });
        expect(reasonForSparing).toBeNull();
    });
})