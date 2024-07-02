import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function AllCharacters() {
  //grab 9 characters random and make it array
  //paste of the screen
  //if user goes to next page, it will append the current exisitng one and go to the next one
  // let randomNum = Math.floor(Math.random() * 20) + 1;
  const [characters, setCharacters] = useState([]);

  {
    /* this is to grab the characters */
  }
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
      {characters.length ? (
        characters.map((character, i) => <div key={i}>{character.name}</div>)
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default AllCharacters