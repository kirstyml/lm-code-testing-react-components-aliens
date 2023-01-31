interface SpeciesNameProps {
    speciesName: string,
    setSpeciesName: (name: string) => void
}

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, setSpeciesName }) => {
    return (
        <>
            <label htmlFor="speciesName">Species Name: </label>
            <input
                id="speciesName"
                type="text"
                value={speciesName}
                onChange={(event) => { setSpeciesName(event.target.value) }}
            />
        </>
    )
}

export default SpeciesName;