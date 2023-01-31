export interface ReasonForSparingProps {
    reasonForSparing: string,
    onChangeReasonForSparing: (event : React.ChangeEvent<HTMLTextAreaElement>) => void
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reasonForSparing, onChangeReasonForSparing }) => {
    return (
        <>
            <label htmlFor="ReasonForSparing">Reason for sparing: </label>
            <textarea
                id="ReasonForSparing" 
                value={reasonForSparing} 
                onChange={onChangeReasonForSparing}
            />
        </>

    )
}

export default ReasonForSparing;