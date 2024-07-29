import React from "react";
import Characters from "../../pages/AllCharacters";
import { useNavigate } from "react-router-dom"; //allows the user to navigate the pages dynamically, simply changing the route with a click of button
import { useOutletContext } from "react-router-dom"; //instead of prop drilling and passing to every page, we can just call this

function Card({ characterInfo }) {
  //pass character as a prop (from the map)
  const { favorites, addToFavorites } = useOutletContext(); //passes the favorites variable, and the addToFavorites as a prop (from outletContext)
  const navigate = useNavigate();

  const characterInformationPage = () =>
    navigate(`/character/${characterInfo.id}`); //this will navigate to the character ID page thanks to useParam, useParam grabs the ID of the character and dynamically extracts the information, and useNavigate is able to navigate to that page

  //create a function to check if a character is in favs
  const isInFavorites = favorites.some((fav) => fav.id === characterInfo.id); //the some checks if there is a character that has an ID of the same

  const addOrRemoveButton = () => {
    if (isInFavorites) {
      return (
        <button class="button is-primary" onClick={() => addToFavorites(characterInfo)}>
          REMOVE FAVORITES!
        </button>
      );
    } else {
      return (
        <button
          class="button is-primary"
          onClick={() => addToFavorites(characterInfo)}
        >
          ADD TO FAVORITES!
        </button>
      );
    }
  };

  //everytime a character is iterated and this component is caled
  return (
    <>
      <div className="card">
        <h3>{characterInfo.name}</h3>
        <img src={characterInfo.image}></img>
        <p>Status: {characterInfo.status}</p>
        <p>Species: {characterInfo.species}</p>
        <button class="button is-primary" onClick={characterInformationPage}>
          Click Me for Information
        </button>
        
        {addOrRemoveButton()}
      </div>
    </>
  );
}

export default Card;

//make a card template
//import information to the card (call it cardData)
//place Card Data to the all characters page