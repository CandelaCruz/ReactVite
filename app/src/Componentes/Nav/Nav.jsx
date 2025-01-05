import React, { useState } from 'react';
import "./Nav.css"
import { BsPersonCircle } from "react-icons/bs";
import { PiChefHatLight } from "react-icons/pi";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
    <div>
      <nav>
        <div className="logo">
          <a href="#"><PiChefHatLight /><span> Recipe day </span></a>
         

        </div>

        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>


        <div className={`items ${isOpen ? 'open' : ''}`}>

        <a href="" className='login-hamburguer'>Login</a>
          <a href="#Home">Home</a>
          <a href="#RecipeHistory">Recipe history</a>
          <a href="#About">About Us</a>
          <a href="#RecipePopular">Recipe Popular</a>
        </div>

          <a href=""className='login '>{<BsPersonCircle />} </a>       
      </nav>
    </div>
    </header>
  );
}

export default Nav;
