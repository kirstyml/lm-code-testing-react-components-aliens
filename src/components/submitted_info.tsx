export interface SubmittedInfoProps {
    speciesName: string,
    planetName: string,
    numberOfBeings: string,
    sumAnswer: string,
    reasonForSparing: string,
    submitted: boolean
}

const SubmittedInfo: React.FC<SubmittedInfoProps> = ({
    speciesName,
    planetName,
    numberOfBeings,
    sumAnswer,
    reasonForSparing,
    submitted
}) => {
    return (
        <section>
            <h2>Submitted Information:</h2>
            {
                submitted &&
                <>
                    <p>Species: {speciesName}</p>
                    <p>Planet: {planetName}</p>
                    <p>Number of beings: {numberOfBeings}</p>
                    <p>What is 2 + 2: {sumAnswer}</p>
                    <p>Reason for sparing: {reasonForSparing}</p>
                </>
            }
        </section>
    )
}

export default SubmittedInfo;