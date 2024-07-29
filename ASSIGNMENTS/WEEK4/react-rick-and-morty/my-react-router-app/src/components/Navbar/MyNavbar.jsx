import React from 'react'
import "./MyNavbar.css";
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom'; //instead of prop drilling and passing to every page, we can just call this 

function Navbar({favorites}) { //passing the favorites 
  return (
    <>
      <nav
        class="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div class="navbar-item">
            <class className="navbar-item">
              <Link to="/">
                <span class="image">
                  <img src="/as.png" />
                </span>
              </Link>
            </class>
            <Link to="/">
              <div class="has-text-light" id="websiteTitle">
                Rick and Morty
              </div>
            </Link>
          </div>
        </div>

        {/* makes navbar items inline text */}
        <div className="navbar-menu">
          {/* navbar start starts on the right side */}
          <div className="navbar-end">
            <div className="navbar-item">
              <div class="buttons">
                <a class="button is-light">
                  <span class="icon">
                    <i class="fa-solid fa-person-burst"></i>
                  </span>
                  <Link to="characters">
                    <strong>Characters</strong>
                  </Link>
                </a>
                <a class="button is-light">
                  <span class="icon">
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <Link to="favorites">
                    <strong>Favorites {favorites.length} </strong>
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar