interface SpeciesNameProps {
    speciesName: string,
    onChangeSpeciesName: (event : React.ChangeEvent<HTMLInputElement>) => void
}

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {
    return (
        <>
            <label htmlFor="speciesName">Species Name: </label>
            <input
                id="speciesName"
                type="text"
                value={speciesName}
                onChange={onChangeSpeciesName}
            />
        </>
    )
}

export default SpeciesName;