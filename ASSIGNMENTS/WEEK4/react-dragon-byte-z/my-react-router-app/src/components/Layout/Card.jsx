import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import axios from "axios";
import CardList from "./CardList";
function Card({ firstName, lastName, username, bio, imageUrl }) {
  return (
    <div class="card">
      <div className="card-content">
        <div className="media">
          {/* for image */}
          <div className="media-left">
            <figure className="image-card">
              <img src={imageUrl} alt="User Avatar"></img>
            </figure>
          </div>
          {/** for username */}
          <div className="media-content">
            <p className="title is-3">
              {firstName}
              <br></br>
              {lastName}
            </p>
            <p className="subtitle is-5">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              @{username}
            </p>
          </div>

          {/* for information about the user */}
          <div class="content">
            <br></br>
            {bio}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

