import React from 'react'
import "./CardList.css"
import RecipePopular from '../RecipePopular';
import Card1 from "./image/Card1.jpg"
import Card2 from "./image/Card2.jpg"
import Card3 from "./image/Card3.jpg"
const CardList = () => {

    const recipes = [
        {
            id: 1,
            title: "Wafles",
            image: Card1,
            description: "Delicious waffles that are fluffy and golden on the outside, perfect to accompany with fresh fruits, maple syrup or melted chocolate, ideal for breakfast.",
        },
        {
            id: 2,
            title: "Meat",
            image: Card2,
            description: "Tacos with marinated pork, cooked on a vertical top and served with pineapple, onion and cilantro, creating a combination of juicy and tasty flavors.",
        },
        {
            id: 3,
            title: "Hamburguer",
            image: Card3,
            description: "Juicy grilled beef on a soft bun, accompanied by lettuce, tomato, onion and a layer of melted cheese, perfect for a quick and tasty meal..",
        },

    ];
    return (

       
        <div className='RecipePopular' id='RecipePopular'>
             <h2 className='section-title text-center fw-bolder'>Popular Recipes</h2>
             <p className='section-description text-center'>From comfort food classics to exotic flavors, our featured recipes are sure to impress</p>
    <div className='CardList '>
        {recipes.map((recipe) => (
            <RecipePopular key={recipe.id} title={recipe.title} image={recipe.image} description={recipe.description} />

        ))}
      
    </div>
    </div>
   
    )
}

export default CardList;
