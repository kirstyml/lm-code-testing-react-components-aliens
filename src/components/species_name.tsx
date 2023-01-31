interface SpeciesNameProps {
    speciesName: string,
    setSpeciesName: (name: string) => void
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, setSpeciesName }) => {
    return (
        <input type="text" value={speciesName} onChange={(event) => {setSpeciesName(event.target.value)}} />
    )
}

export default SpeciesName;