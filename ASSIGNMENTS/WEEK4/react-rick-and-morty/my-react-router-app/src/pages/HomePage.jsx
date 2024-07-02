import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function HomePage() {
  const [episode, setEpisode] = useState({});

  async function FetchData() {
    try {
      let response = await axios.get(
        `https://rickandmortyapi.com/api/episode/10`
      );

      console.log(response.data);
      setEpisode(response.data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  useEffect(() => {
    /* runs on render*/ /* len "i will give you this 5$ rachel, idk when. "*/
    FetchData();
  }, []);

  return (
    <>
      <p>
        Episode {episode.episode} - {episode.name}
      </p>
    </>
  );
}

export default HomePage;
