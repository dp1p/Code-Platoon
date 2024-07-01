import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import axios from 'axios'
import Planet from "../Pages/Planet";
<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

function Hero() {
  const [character, setCharacter] = useState("");

  {/* WHEN THE PAGE IS LOADED, THIS USEEFFECT WILL BE AUTOMATICALLY RENDERED*/}
  useEffect(() => {
    async function FetchData() {
      let randomNum = Math.floor(Math.random() * 30) +1;  // random num 1-50
      let response = await axios.get(
        `https://dragonball-api.com/api/characters/${randomNum}`
      );
      console.log(response);
      setCharacter(response.data.image);
    }
    /* runs on render*/
    FetchData();
  }, []);

  return (
    <>
      <section class="hero is-small">
        <div className="background-overlay">
          <div class="hero-body">
            <div className="columns">
              <div class="column">
                <div id="column-with-logo">
                  <p class="subtitle is-size-1" id="dragon-font">
                    WELCOME TO... <br></br>
                    <div class="logo">
                      <img src="src/assets/images/LOGO FULL.png"></img>
                    </div>
                  </p>
                  <div id="column-with-button">
                    <p id="dragon-font" class="is-size-4">
                      Click on our latest release!
                    </p>
                    <button class="button is-warning">
                        <Link to="/planet">To the Planets!</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="column is-3" id="column-is-3">
                <div>
                  <img src={character} alt="" class="image-hero"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero