import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../components/Elements for Character/Card';

function Favorites() {
  const { favorites, setFavorites } = useOutletContext(); //passes the favorites variable, and the addToFavorites as a prop (from outletContext)
  console.log(favorites)

  const clearAll = () => {
    setFavorites([]);     //clears all the favorites by clearing the array itself
  };

  return (
    <>
    <button className="button is-danger" onClick={clearAll}>
        CLEAR ALL FAVORITES
      </button>
      <div className="card-container">
        {favorites.length ? ( favorites.map((character) => ( <Card characterInfo={character} /> ))
        ) : (
          //IF FALSE
          <div>NO FAVORITES!</div>
        )}

      </div>
    </>
  );
}

export default Favorites