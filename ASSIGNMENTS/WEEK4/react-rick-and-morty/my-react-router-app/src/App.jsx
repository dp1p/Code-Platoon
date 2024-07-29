import { Outlet } from "react-router-dom"; //this will make routing pages easier, as this will be the changing the page based on the url / pages
import Navbar from "./components/Navbar/MyNavbar"
import { useState } from "react";
export default function App() {

  const [favorites, setFavorites] = useState([]);                                  // we must make a useState to allow the user to setFavorites
  const addToFavorites = (character) => setFavorites([...favorites, character]);        //this func will allows use to add our favorite character, and if we have favorites and want to add more, '...' allows us to append to our existing arr of favorites
  return (
  <>
    <Navbar favorites={favorites}/> {/* passes the favorites variable as prop to the navbar*/}
    <Outlet context={{favorites, setFavorites, addToFavorites}}/>                {/* this useOutletContext will allow use to pass the prop 'favorites' instead of calling the prop to every page AKA PROPDRILLING, the favorites tab data should be acccessible to what page you go to.*/}
  </>
  )
}
