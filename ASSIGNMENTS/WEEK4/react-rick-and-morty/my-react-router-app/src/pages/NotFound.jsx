import React from 'react'
import Navbar from '../components/Navbar/MyNavbar';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

function NotFound() {
  const [favorites] = useState({});
  return (
    <>
      <Navbar favorites={favorites} />
      <div className="columns is-centered">
        <div className="column is-half has-text-centered">
          <img src="/adultswim.png" alt="Adult Swim Logo" />
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column has-text-centered">
          <p class='is-size-2 m-6'>Unfortunately this Page has not been discovered.</p>
        </div>
      </div>
      <div className='columns is-centered m-6'>
        <img src='/notfound.png'></img>
      </div>
    </>
  );
}

export default NotFound