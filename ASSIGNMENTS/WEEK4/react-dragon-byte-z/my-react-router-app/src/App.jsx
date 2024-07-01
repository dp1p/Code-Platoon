import React, { useState, useEffect } from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet/>
      <Footer></Footer>
    </>
  );
}

export default App;
