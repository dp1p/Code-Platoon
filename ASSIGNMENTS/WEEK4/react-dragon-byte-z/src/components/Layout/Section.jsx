import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import axios from "axios";
import Card from "./Card";
import CardList from "./CardList";
import CardListHonorableMentions from "../CardListHonorableMentions";

function Section() {
  return (
    <>
      <section class="section is-medium">
        <h1 class="title">Who is Dragon Byte Z?</h1>
        <h2 class="subtitle">
          <br></br>
          Team 1, or also known as Dragon Byte Z is a group of students from the Code Platoon Coding Bootcamp, <br></br>
          from the X-Ray Cohort, containing 4 students.
        </h2>
        <CardList></CardList>
        <br></br>
        <h1 class="title is-2">Honorable Mentions</h1>
        <h2 class="subtitle">
          <br></br>
          These are the people who helped us on the journey of getting the dragon balls all together.
        </h2>
            <CardListHonorableMentions></CardListHonorableMentions>
      </section>

      
    </>
  );
}
export default Section;
