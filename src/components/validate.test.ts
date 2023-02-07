import { validate, ValidationFunctionName } from './validate'

describe('validate function', () => {
    it('speciesName: returns undefined for a valid name', () => {
        const ValidateProps = {
            value: 'Human',
            validationFunctionName: 'speciesName' as ValidationFunctionName
        }
        expect(validate(ValidateProps)).toBeUndefined();
    });
    it('speciesName: returns errorMessage for a name less than 3 characters', () => {
        const ValidateProps = {
            value: 'Hu',
            validationFunctionName: 'speciesName' as ValidationFunctionName
        }
        expect(validate(ValidateProps)).toBe('Species name must be between 3 and 23 characters');
    });
    it('speciesName: returns errorMessage for a name more than 23 characters', () => {
        const ValidateProps = {
            value: 'Huqwertyuiopasdfghjklzxcvbnm',
            validationFunctionName: 'speciesName' as ValidationFunctionName
        }
        expect(validate(ValidateProps)).toBe('Species name must be between 3 and 23 characters');
    });
    it('speciesName: returns errorMessage for a name that includes a number', () => {
        const ValidateProps = {
            value: 'Human5',
            validationFunctionName: 'speciesName' as ValidationFunctionName
        }
        expect(validate(ValidateProps)).toBe('Species name cannot contain a number or special character');
    });
    it('speciesName: returns errorMessage for a name that includes a special character', () => {
        const ValidateProps = {
            value: 'Human!',
            validationFunctionName: 'speciesName' as ValidationFunctionName
        }
        expect(validate(ValidateProps)).toBe('Species name cannot contain a number or special character');
    });
    it('planetName: returns errorMessage for a name less than 2 characters', () => {
        const ValidateProps = {
            value: 'E',
            validationFunctionName: 'planetName' as ValidationFunctionName
        }
        expect(validate(ValidateProps)).toBe('Planet name must be between 2 and 49 characters');
    });
    it('planetName: returns errorMessage for a name more than 49 characters', () => {
        const ValidateProps = {
            value: 'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvb',
            validationFunctionName: 'planetName' as ValidationFunctionName
        }
        expect(validate(ValidateProps)).toBe('Planet name must be between 2 and 49 characters');
    });
    it('planetName: returns errorMessage for a name that includes a special character', () => {
        const ValidateProps = {
            value: 'Earth!',
            validationFunctionName: 'planetName' as ValidationFunctionName
        }
        expect(validate(ValidateProps)).toBe('Planet name cannot contain special characters');
    });
})