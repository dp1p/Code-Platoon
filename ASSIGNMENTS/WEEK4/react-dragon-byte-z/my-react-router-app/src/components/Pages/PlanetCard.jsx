import React, { useEffect, useState}  from "react";      
import axios from "axios"



  const PlanetCard = ({num}) => {
 
    const [planets, setPlanets] = useState([])


    const getPlanets = async () => {
      try {                         
      
        const planetbag = await axios.get('https://dragonball-api.com/api/planets?limit=20')
        console.log(planetbag)
        setPlanets(planetbag)

    } catch (error) {
        console.error("An error occurred:", error)
      }
    }

    useEffect( () => { 
      getPlanets()
    }, [])
    

     
    return (
      <>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={planets?.data?.items?.[num]?.image}></img>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="my-react-router-app/src/assets/images/LOGO.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">
                  {planets?.data?.items?.[num]?.name}
                </p>
              </div>
            </div>

            <div className="content">
              {planets?.data?.items?.[num]?.description} <a>@bulmaio</a>.{" "}
              <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </>
    ); 
}


export default PlanetCard
