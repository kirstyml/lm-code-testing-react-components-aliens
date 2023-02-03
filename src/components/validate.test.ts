import { validate, ValidationFunctionName } from './validate'

describe('validate function', () => {
    it('speciesName: returns undefined for a valid name', () => {
        const ValidateProps = {
            value: 'Human',
            validationFunctionName: 'speciesName' as ValidationFunctionName
        }
        expect(validate(ValidateProps)).toBeUndefined();
    });
    it('speciesName: returns errorMessage for an invalid name', () => {
        const ValidateProps = {
            value: 'Hu',
            validationFunctionName: 'speciesName' as ValidationFunctionName
        }
        expect(validate(ValidateProps)).toBe('Species name must be between 3 and 23 characters');
    });

    // Add test for all of the validate functions in here.....
})