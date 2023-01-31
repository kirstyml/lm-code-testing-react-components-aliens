interface SumAnswerProps {
    sumAnswer: string,
    setSumAnswer: (name: string) => void
}

const SumAnswer: React.FC<SumAnswerProps> = ({ sumAnswer, setSumAnswer }) => {
    return (
        <>
            <label htmlFor="sumAnswer">What is 2 + 2? </label>
            <select 
                id="sumAnswer" 
                value={sumAnswer} 
                onChange={(event) => { setSumAnswer(event.target.value) }}
            >
                <option value="4">4</option>
                <option value="Not 4">Not 4</option>
            </select>
        </>

    )
}

export default SumAnswer;