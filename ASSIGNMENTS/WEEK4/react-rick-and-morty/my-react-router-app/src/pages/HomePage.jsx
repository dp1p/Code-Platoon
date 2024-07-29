import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./HomePage.css";


function HomePage() {


  return (
    <>
      <div className="backgroundStyle">
            {/* iframe allows us to embed a webpage in*/}
              <iframe
                id="youtube-vid"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/PkZtVBNkmso"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
      </div>

      {/* aligning the adult swim */}
      <div className="columns is-centered m-6">
        <img src="/adultswim.png" alt="Adult Swim Logo" />
      </div>
    
    </>
  );
}

export default HomePage;










  // const [episode, setEpisode] = useState({});

  // async function FetchData() {
  //   try {
  //     let response = await axios.get(
  //       `https://rickandmortyapi.com/api/episode/10`
  //     );

  //     console.log(response.data);
  //     setEpisode(response.data);
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //   }
  // }

  // useEffect(() => {
  //   /* runs on render*/ /* len "i will give you this 5$ rachel, idk when. "*/
  //   FetchData();
  // }, []);
