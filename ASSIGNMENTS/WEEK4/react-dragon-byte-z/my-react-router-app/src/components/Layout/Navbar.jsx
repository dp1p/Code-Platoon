import { useState } from "react";
import "bulma/css/bulma.min.css";
<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar is-warning" role="navigation" aria-label="main navigation"> {/*Navbar class*/}

        {/* NAVBAR ICON! */}
        <div class="navbar-brand"> {/*navbar brand is esstientally the icon will have the left side of the nav bar*/}
          {/* THE ICON NAVIGATION */}
          <a class="navbar-item" href="src/App.jsx"> {/* nav bar item that will be the icon, when the navbar item is clicked it will return to mainpage*/}
            <img src="src/assets/images/LOGO.png"></img> {/* icon image*/}
          </a>
        </div>  {/* <---- END NAVBAR ICON! */}
        
        {/*NAVBAR MENU ITEMS*/}
          <div class="navbar-menu"> {/* ESSENTIALLY CONTAINS THE NAV BAR ITEMS */}
            <div class="navbar-start">  {/* <--- THIS STARTS THE LEFT SIDE OF THE NAVIGATION BAR*/}
              <a class="navbar-item">
                <Link to="/">Home</Link>
              </a>


              {/*DROP DOWN MENU */}
              <div class="navbar-item has-dropdown is-hoverable"> {/* has dropdown gives it the dropdown ui */}
                <div class="navbar-link">
                  Games
                </div>
                  <div class="navbar-dropdown"> {/* items that are in the drop down menu */}
                    <a class="navbar-item" href="">
                    Dragon Srength Z
                    </a>
                    <a class="navbar-item" href="">
                    Dragon Date Z: Dating Simulator
                    </a>                    
                  </div>            {/* <---- items that are in the drop down menu END */}
              </div>            {/* <---- ENDS DROP DOWNDOWN UI */}
            </div>            {/* <---- ENDS NAVBAR START (LEFT SIDE OF THE NAVBAR) */}

            
            <div class="navbar-end"> 
              <div class="navbar-item has-dropdown is-hoverable"> {/* has dropdown gives it the dropdown ui */}
                  <div class="navbar-link">
                    More
                  </div>
                  <div class="navbar-dropdown is-right">
                          <a class="navbar-item">
                            <div>
                              <span class="icon"> {/* icon class allows the icon to be a specfic size */}
                                <i class="fa fa-twitter"></i> {/* the icons are hardcoded into bulma, you go to font awesome website to learn how to import specific icons*/}
                              </span>
                              <span>Who we are</span>
                            </div>
                          </a>
                          <a class="navbar-item">
                            <div>
                              <span class="icon"> {/* icon class allows the icon to be a specfic size */}
                                <i class="fa fa-envelope"></i>
                              </span>
                              <span>Contact Us</span>
                            </div>
                          </a>
                    </div> {/* <--- ENDS navbar drop down items */}
                </div> {/* <--- ENDS navbar drop down hover */}
              </div>{/* <---- ENDS THIS NAVBAR RIGHT  */}
          </div> {/* <---- ENDS NAVBAR MENU */}

      </nav>
    </>
  );
}

export default Navbar;
