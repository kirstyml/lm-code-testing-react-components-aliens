export interface PlanetNameProps {
    planetName: string,
    onChangePlanetName: (event : React.ChangeEvent<HTMLInputElement>) => void
}

const PlanetName: React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName }) => {
    return (
        <>
            <label htmlFor="planetName">Planet Name: </label>
            <input 
                id="planetName" 
                type="text" 
                value={planetName} 
                onChange={onChangePlanetName}
            />
        </>

    )
}

export default PlanetName;