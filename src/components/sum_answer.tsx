export interface SumAnswerProps {
    sumAnswer: string,
    onChangeSumAnswer: (event : React.ChangeEvent<HTMLSelectElement>) => void
}

const SumAnswer: React.FC<SumAnswerProps> = ({ sumAnswer, onChangeSumAnswer }) => {
    return (
        <>
            <label htmlFor="sumAnswer">What is 2 + 2? </label>
            <select 
                id="sumAnswer" 
                value={sumAnswer} 
                onChange={onChangeSumAnswer}
            >
                <option value="4">4</option>
                <option value="Not 4">Not 4</option>
            </select>
        </>

    )
}

export default SumAnswer;