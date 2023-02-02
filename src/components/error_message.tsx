interface ErrorMessageProps {
    errorMessage: string
}

const ErrorMessage : React.FC<ErrorMessageProps> = ({ errorMessage }) => {
    return (
        <p className="errorMessage">{errorMessage}</p>
    )
};

export default ErrorMessage;