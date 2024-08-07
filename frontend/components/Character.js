import React,{useState} from 'react'


function Character({ character }) { 
  
  const[showHomeworld, setShowHomeworld] = useState(false)

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld)
}
  return (
    <div className='character-card'onClick={toggleHomeworld}>
    <h3 className="character-name"> {character.name}</h3>
    <p >Gender: {character.gender}</p>
    <p >Birth Year: {character.birth_year}</p>
    <p >Created: {character.created}</p>
    <p >Edited: {character.edited}</p>
    <p >Eye Color: {character.eye_color}</p>
    <p >Height: {character.height}</p>
    <p >Skin Color: {character.skin_color}</p>
    <p >Mass: {character.mass}</p>
    
      {showHomeworld && (
        <div className='character-planet'>
          <h3>Homeworld: {character.homeworld.name}</h3>
          <p>Climate: {character.homeworld.climate}</p>
          <p>Created: {character.homeworld.created}</p>
          <p>Diameter: {character.homeworld.diameter}</p>
          <p>Edited: {character.homeworld.edited}</p>
          <p>Gravity: {character.homeworld.gravity}</p>
          <p>Orbital Period: {character.homeworld.orbital_period}</p>
          <p>Population: {character.homeworld.population}</p>
          <p>Rotation Period: {character.homeworld.rotation_period}</p>
          <p>Surface Water: {character.homeworld.surface_water}</p>
          <p>Terrain: {character.homeworld.terrain}</p>
        </div>
      )
      }
    </div>
  )
}

export default Character
