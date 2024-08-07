import React, { useEffect } from 'react'
import axios from 'axios'
import Character from './Character'
import {useState} from 'react'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  
  const [characters, setCharacters] = useState([])
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [peopleResponse, planetsResponse] = await Promise.all([
          axios.get(urlPeople),
          axios.get(urlPlanets)
        ]);

        const people = peopleResponse.data
        console.log(people)
        const planets = planetsResponse.data
        console.log(planets)

        const characterWithPlanets = people.map(person => {
          const homeworld = planets.find(planet => planet.id === person.homeworld);
          return { ...person,homeworld};
        })
        setCharacters(characterWithPlanets);
      
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [])

  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <div className='characters-list'>
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
    </div>
  )
}

export default App


if (typeof module !== 'undefined' && module.exports) module.exports = App
