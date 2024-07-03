import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' //this is to dynamicically extract data of a character from allcharacters, using the ID and pasting it into the url 
import axios from 'axios'

const Character = () => {
    const {id} = useParams(); //useParams will grab the id of the specific character, destrcutre the id to get info, and paste the id in the url without needing to rerender
    
    const [characterInfo, setCharacterInfo] = useState({}) //we are now grabbing an individual character

    //it will grab the specfic character id Info
    useEffect(()=>{
      //grabs the cooresponding character ID
      const getCharacter = async () => {
        try {
          let response = await axios.get(
            `https://rickandmortyapi.com/api/character/${id}`
          );
          console.log(response.data);
          setCharacterInfo(response.data);
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };

      getCharacter();
    }, [id]) //whenever the id param is changed (thanks to useParam) it will rerender

    console.log("PLAING")
  return (
    <>
      <div>
        <h1>Character Information: {characterInfo.name} ID: {id}</h1>
        <img src={characterInfo.image} alt="No image found"></img>
        <div>Gender: {characterInfo.gender}</div>

        <div>
          {/* CONDITIONAL RENDERING */}
          {/* if the character DOES have an origin  */}
          {characterInfo.origin ? (
            <div>Origin Planet: {characterInfo.origin.name}</div>
          ) : (
            <div> Origin Planet Unknown</div>
          )}
        </div>
        <div>Status: {characterInfo.status}</div>
      </div>
    </>
  );

}

export default Character