import React from 'react';


const RecipePopular = ({ title, image, description }) => {
    return (


        <section id='RecipesPopular'>
            <div className='card'>
                <img className='card-image' src={image} alt= {title}  />
                <div className='card-content'>
                 <h3 className='card-title'> {title} </h3>
                 <p className="card-description">{description}</p>
                </div>
            </div>

        </section>
    );
}

export default RecipePopular;