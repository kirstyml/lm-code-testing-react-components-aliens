interface NumberOfBeingsProps {
    numberOfBeings: string,
    setNumberOfBeings: (name: string) => void
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ numberOfBeings, setNumberOfBeings }) => {
    return (
        <>
            <label htmlFor="NumberOfBeings">Number of beings: </label>
            <input 
                id="NumberOfBeings" 
                type="number" 
                value={numberOfBeings} 
                onChange={(event) => { setNumberOfBeings(event.target.value) }}
            />
        </>

    )
}

export default NumberOfBeings;