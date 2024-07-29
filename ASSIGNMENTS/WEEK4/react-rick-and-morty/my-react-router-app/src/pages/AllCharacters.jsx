import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Elements for Character/Card';
{/* ALL CHARACTER PAGE */}
function Characters() {

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1) //this is page 1, the page is set to 1

  {/* this is to grab the characters */}
  const getCharacters = async () => {
    try {
      let response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
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
  }, [page]); //the characters will change whenever the page is pressed

  const nextPage = () => {
    setPage(page+1)
  }

  const previousPage = () => {
    setPage(page - 1);
  };
  console.log(characters);

  return (
    <>
    <button onClick={previousPage}>Previous</button><button onClick={nextPage}>Next</button>
      {/* we use key to uniquely identify each character */}
      <div className="container">
        <div className="columns is-multiline">
          {/* allows us to put cards in a line, a full line of a column is about 12 spaces*/}
          {characters.length ? ( //DOES THE CHARACTER ARR HAVE A LENGTH
            //if TRUE, WE ARE ITERATING FOR EACH CHARACTER IN THE ARR OF CHARACTERS, WE WILL GET THEIR INDIVIDUAL INFORMATION
            characters.map((character) => (
              <div className="column is-3">
                <Card characterInfo={character} />
              </div>
            ))
          ) : (
            //IF FALSE
            <div>Loading</div>
          )}
          {/*we call the size of card in the multiline column as size 3 as we can make 4 items in one row, dont forget, a column is a max size of 12 */}
          {/* the 'card key' renders the card component displaying information for each character, the id is there to uniquely identify each character for something like adding favs*/}
          {/* passes the 'character' variable from the AllCharacters.jsx as a prop for the Card component, so it grab the appropiate values */}
        </div>
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

//grab 9 characters random and make it array
//paste of the screen
//if user goes to next page, it will append the current exisitng one and go to the next one
// let randomNum = Math.floor(Math.random() * 20) + 1;