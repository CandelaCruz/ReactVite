import React from 'react'
import "./Footer.css"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { PiChefHatLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <a className="sub-logo" href=""><PiChefHatLight className='mb-2'/><span>Recipe day</span></a>
        <p className="descripcion slide-line">Find the perfect recipe, cook your desired dish.</p>

      <div className='links'>
        <a href="#Home">Home</a>
        <a href="#RecipeHistory">Recipe history</a>
        <a href="#About">About Us</a>
        <a href="#RecipePopular">Recipe Popular</a>
      </div>
         <div className='content '>

          <p
            className='mt-1 '>Copyright © 2024</p>

          <div className='icons '>
            <a href=""><FaFacebook /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><FaYoutube /></a>
          </div>

        </div>

      </div>
    </footer>

  )
}

export default Footer