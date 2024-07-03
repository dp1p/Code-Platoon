import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Elements for Character/Card';
{/* ALL CHARACTER PAGE */}
function Characters({character}) {
  //grab 9 characters random and make it array
  //paste of the screen
  //if user goes to next page, it will append the current exisitng one and go to the next one
  // let randomNum = Math.floor(Math.random() * 20) + 1;
  const [characters, setCharacters] = useState([]);

  {/* this is to grab the characters */}
  const getCharacters = async () => {
    try {
      let response = await axios.get(
        `https://rickandmortyapi.com/api/character/`
      );

      console.log(response.data);
      setCharacters(response.data.results);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  /* runs on render*/
  useEffect(() => {
    getCharacters();
  }, []);
  console.log(characters);

  return (
    <>
      {/* we use key to uniquely identify each character */}
      <div className="card-container">
        {characters.length ? //DOES THE CHARACTER ARR HAVE A LENGTH
        //if TRUE, WE ARE ITERATING FOR EACH CHARACTER IN THE ARR OF CHARACTERS, WE WILL GET THEIR INDIVIDUAL INFORMATION
        (characters.map((character) => (<Card key={character.id} character={character} />))
        ) : (
        //IF FALSE
          <div>Loading</div>
        )}
        {/* the 'card key' renders the card component displaying information for each character, the id is there to uniquely identify each character for something like adding favs*/}
        {/* passes the 'character' variable from the AllCharacters.jsx as a prop for the Card component, so it grab the appropiate values */}
      </div>
    </>
  );
}

export default Characters

// if user clicks {nextpage}, grab 9 more api calls, and render it, 

// if page len < 1
//display prev and next
//page[:-1} //last element
//display prev