
import React, { useState } from 'react';
import "./RecipeCard.css"; 
const RecipeCard = ({ recipe, onDelete }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="recipe-card container">
      {/* Imagen de la receta */}
      <div className="recipe-card-image">
        <img
          src={recipe.image || '/default-recipe.jpg'}
          alt={recipe.title}
          className="recipe-image"
        />
      </div>

      <h3 style={{fontSize: '30px', marginTop: '8px'}}>{recipe.title}</h3>

      {/* Breve descripción con los primeros ingredientes */}
      <p>
        <strong>Ingredients:</strong>{' '}
        {recipe.ingredients.slice(0, 2).map((ingredient, index) => (
          <span key={index}>
            {ingredient.name} ({ingredient.quantity} g)
            {index < recipe.ingredients.slice(0, 2).length - 1 ? ', ' : ''}
          </span>
        ))}
        {recipe.ingredients.length > 2 && '...'}
      </p>

      {/* Resumen Nutricional */}
      <h3>Nutritional Summary</h3>
      <p>Calories: {recipe.nutrition.calories.toFixed(2)}</p>
      <p>Proteins: {recipe.nutrition.protein.toFixed(2)} g</p>
      <p>Carbohydrates: {recipe.nutrition.carbs.toFixed(2)} g</p>

      {/* Botón para alternar detalles */}
      <button className='btn-details' onClick={handleToggleDetails}>
        {showDetails ? 'Hide Details' : 'See Details'}
      </button>

      {/* Detalles completos */}
      {showDetails && (
        <div className="recipe-details">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name} - {ingredient.quantity} g
              </li>
            ))}
          </ul>

          <h3>Steps</h3>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <h3>Complete nutritional information:</h3>
          <p>Calories: {recipe.nutrition.calories.toFixed(2)}</p>
          <p>Proteins: {recipe.nutrition.protein.toFixed(2)} g</p>
          <p>Carbohydrates: {recipe.nutrition.carbs.toFixed(2)} g</p>
        </div>
      )}

      {/* Botón para eliminar receta */}
      <button className='btn-eliminate' onClick={onDelete}>Delete Recipe</button>
    </div>
  );
};

export default RecipeCard;



