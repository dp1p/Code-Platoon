import React, { useState, useEffect } from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Layout/Hero";
import Section from "./components/Layout/Section";
import Footer from "./components/Layout/Footer";
import CardList from "./components/Layout/CardList";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Section></Section>
      <Footer></Footer>
    </>
  );
}

export default App;
