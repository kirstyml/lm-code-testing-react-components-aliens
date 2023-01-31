interface PlanetNameProps {
    planetName: string,
    setPlanetName: (name: string) => void
}

const PlanetName: React.FC<PlanetNameProps> = ({ planetName, setPlanetName }) => {
    return (
        <>
            <label htmlFor="planetName">Species Name: </label>
            <input 
                id="planetName" 
                type="text" 
                value={planetName} 
                onChange={(event) => { setPlanetName(event.target.value) }}
            />
        </>

    )
}

export default PlanetName;