// RecipeBuilder.jsx
import React from 'react';
import './RecipeBuilder.css';

const RecipeBuilder = ({ selectedIngredients, onUpdateQuantity }) => {
  return (
    <div>
      <h3>Selected Ingredients</h3>
      <ul>
        {selectedIngredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.name} ({ingredient.category}) - 
            <input
              type="number"
              min="1"
              value={ingredient.quantity}
              onChange={(e) => onUpdateQuantity(ingredient.id, parseInt(e.target.value, 10))}
            />{' '}
            gramos
          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeBuilder;
