import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import axios from "axios";
import Card from "./Card";

function CardList ({ firstName, lastName, username, bio, imageSource }) {
    //create objects // instance properties
    const cardsData = [
      {
        firstName: "Daniel",
        lastName: "Phanachone",
        username: "dp1p",
        bio: "Daniel Phanachone joined the Air Force in 2020 and served honorably for 4 years in the Air Force. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio commodi! Quae inventore tempora vero ut excepturi, quo enim dolores, odit eveniet iste pariatur mollitia odit eveniet iste pariatur mollitia repellendus ab deserunt eligendi nisi dicta!",
        imageSource:
          "https://static.fandomspot.com/images/08/8121/05-gohan-bowl-cut-anime-screenshot.jpg",
      },

      {
        firstName: "Len",
        lastName: "kedrow",
        username: "Len-Kendrow",
        bio: "Len Kendrow turned out to be someone you just ipsum dolor sit amet consectetur adipisicing elit. Odio commodi! Quae inventore tempora vero ut excepturi, quo enim dolores, odit eveniet iste pariatur mollitia odit eveniet iste pariatur mollitia repellendus ab deserunt eligendi nisi dicta!",
        imageSource:
          "https://qph.cf2.quoracdn.net/main-qimg-d86eb4b1fe1f8b2721e668506f6105f5-pjlq",
      },

      {
        firstName: "Chris",
        lastName: "Roberts",
        username: "christopherroberts123",
        bio: "Chris Roberts turned out to be something, and that something was ipsum dolor sit amet consectetur adipisicing elit. Odio commodi! Quae inventore tempora vero ut excepturi, quo enim dolores, odit eveniet iste pariatur mollitia odit eveniet iste pariatur mollitia repellendus ab deserunt eligendi nisi dicta!",
        imageSource:
          "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/06/Dragon-Ball-Z-Mr-Satan-1.jpg",
      },

      {
        firstName: "Momourad",
        lastName: "LastName",
        username: "momoland0293",
        bio: "Momo was just ipsum dolor sit amet consectetur adipisicing elit. Odio commodi! Quae inventore tempora vero ut excepturi, quo enim dolores, odit eveniet iste pariatur mollitia odit eveniet iste pariatur mollitia repellendus ab deserunt eligendi nisi dicta!",
        imageSource:
          "https://comicvine.gamespot.com/a/uploads/scale_small/0/6342/153052-167696-android-20.jpg",
      },
    ];

  return (
    <>
      <div className="column">
          {cardsData.map((card, index) => ( // index allows us to uniquely identify each Card component in the list when rendered, does not interfere with the code
            <Card
              key={index}
              firstName={card.firstName}
              lastName={card.lastName}
              username={card.username}
              bio={card.bio}
              imageUrl={card.imageSource}
            />
          ))}
        </div>
    </>
  );
}
export default CardList;
