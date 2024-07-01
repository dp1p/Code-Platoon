import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import axios from 'axios'
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
      <section class="hero is-medium">
        <div className="background-overlay">
          <div class="hero-body">
            <div className="columns">
              <div className="column">
                <div class="logo">
                  <img src="src/assets/images/LOGO FULL.png"></img>
                </div>
                <p class="subtitle" id="dragon-font">
                  WELCOME TO <br></br> DRAGON BYTE Z
                </p>
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