import React from "react";

interface NumberOfBeingsProps {
    numberOfBeings: string,
    onChangeNumberOfBeings: (event : React.ChangeEvent<HTMLInputElement>) => void
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings }) => {
    return (
        <>
            <label htmlFor="NumberOfBeings">Number of beings: </label>
            <input 
                id="NumberOfBeings" 
                type="number" 
                value={numberOfBeings} 
                onChange={onChangeNumberOfBeings}
            />
        </>

    )
}

export default NumberOfBeings;