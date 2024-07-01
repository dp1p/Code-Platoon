import React, { useState, useEffect } from "react";
import "../../App.css";
import "bulma/css/bulma.min.css";
import Hero from "../Layout/Hero";
import Section from "../Layout/Section";
import Planet from "./Planet";

function HomePage() {
  return (
    <>
      <Hero></Hero>
      <Section></Section>
    </>
  );
}

export default HomePage;
