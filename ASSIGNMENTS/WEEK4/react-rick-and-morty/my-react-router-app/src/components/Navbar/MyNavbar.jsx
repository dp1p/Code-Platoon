import React from 'react'
import "./MyNavbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav
        class="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <class className="navbar-item">
            <span class="icon">
              <i class="fa-solid fa-dungeon pl-4"></i>
            </span>
          </class>
          <div class="navbar-item">
            <Link to="/">
              <strong class="has-text-light">Rick and Morty</strong>
            </Link>
          </div>
        </div>

        {/* makes navbar items inline text */}
        <div className="navbar-menu">
          {/* navbar start starts on the right side */}
          <div className="navbar-end">
            <div className="navbar-item">
              <div class="buttons">
                <a class="button is-light is-medium">
                  <span class="icon">
                    <i class="fas fa-solid fa-person-burst"></i>
                  </span>
                  <Link to="characters">
                    <strong>Characters</strong>
                  </Link>
                </a>
                <a class="button is-light is-medium">
                  <span class="icon">
                    <i class="fa-solid fa-tv"></i>
                  </span>
                  <strong>Episodes</strong>
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