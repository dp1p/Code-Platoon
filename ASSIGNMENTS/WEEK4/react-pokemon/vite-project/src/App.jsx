import { useState } from 'react'
import './App.css'
import PokeButton from './componenets/PokeButton'

function App() {
  return (
    <>
      <p>Daniel: The Ultimate PokeDex</p>
      <PokeButton></PokeButton>
    </>
  )
}

export default App


/**
 * one page
 * import pokemon font
 * fetch api call from pokeapi grabbing the first pokemon type, then generating the next 5 pkmn similar with the same type
 * display indivdual name on the bottom 
 * display pokemon type as part of the title
 * tailwind - make image grow when hovered
 * 2 rows of 3 displayed
 * button [type, setType] = useState ("
 * )- create useState 
 * 
 * 
 **/