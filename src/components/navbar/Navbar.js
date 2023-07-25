import React from 'react';
import {  Link } from "react-router-dom";
import logo from '../../wordSearchLogo.png';

const Navbar= () =>{
  return (
    <nav class="top-nav">
      <label class="logo">
          <img src= {logo} alt='Word Search Logo'/>
      </label>
      <h2>
        Wonderful Word Searches
      </h2>
        <input id="menu-toggle" type="checkbox"/>
        <label class='menu-button-container' for="menu-toggle">
          <span class='menu-button'></span>
        </label>
      <ul class="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to ="/about">About</Link></li>
      </ul>

    </nav>
  );
}
export default Navbar;