import React from 'react';
import './Casa.css';

const Casa = ({goToCreateRecipe}) => {

  return (
    <div>
      <section id='Home' className="hero">
        <div className="hero-content">
          <h1>Your desired dish?</h1>
          <p>
            Create your recipes with the ease that <span>RECIPE DAY </span>offers
            you so that other users know about it.
          </p>
          <div>
           <a href="#CreateRecipe"> <button className="btn-superior" onClick={goToCreateRecipe}>
              Create Recipes
            </button> </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Casa;

