interface ReasonForSparingProps {
    reasonForSparing: string,
    setReasonForSparing: (name: string) => void
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reasonForSparing, setReasonForSparing }) => {
    return (
        <>
            <label htmlFor="ReasonForSparing">Reason for sparing: </label>
            <textarea
                id="ReasonForSparing" 
                value={reasonForSparing} 
                onChange={(event) => { setReasonForSparing(event.target.value) }}
            />
        </>

    )
}

export default ReasonForSparing;