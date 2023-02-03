interface ValidateProps {
    value: string,
    type: string
}

export const validate : (props: ValidateProps) => string | undefined = ({ value, type }) => {
    switch (type) {
        case 'speciesName':
            if(value.length < 3 || value.length > 23) {
                return "Species name must be between 3 and 23 characters";
            }
            if(!(/^[a-zA-Z]*$/).test(value)) {
                return "Species name cannot contain a number or special character";
            }
            return undefined;
        case 'planetName':
            if(value.length < 2 || value.length > 49) {
                return "Planet name must be between 2 and 49 characters"
            }
            if(!(/^[a-zA-Z0-9]*$/).test(value)) {
                return "Planet name cannot contain special characters"
            }
            return undefined;
        default: 
            return undefined;
    }
};