import React, { useState, useEffect } from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Layout/Hero";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
    </>
  );
}

export default App;
