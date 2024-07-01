// NotFound.jsx
import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import "./NotFound.css";
function NotFound() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <div class="notfound-image"></div>
      <Footer></Footer>
    </div>
  );
}

export default NotFound;
