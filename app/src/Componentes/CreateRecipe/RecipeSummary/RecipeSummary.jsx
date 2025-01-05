// RecipeSummary.jsx
import React from 'react';
import './RecipeSummary.css';
const RecipeSummary = ({ ingredients }) => {
  // Calcular los valores nutricionales basados en gramos
  const totalNutrition = ingredients.reduce(
    (acc, ingredient) => ({
      calories: acc.calories + (ingredient.calories / 100) * ingredient.quantity,
      protein: acc.protein + (ingredient.protein / 100) * ingredient.quantity,
      carbs: acc.carbs + (ingredient.carbs / 100) * ingredient.quantity
    }),
    { calories: 0, protein: 0, carbs: 0 }
  );

  return (
    <div>
      <h3>Recipe Summary</h3>
      <p>Calorías: {totalNutrition.calories.toFixed(2)}</p>
      <p>Proteínas: {totalNutrition.protein.toFixed(2)} g</p>
      <p>Carbohidratos: {totalNutrition.carbs.toFixed(2)} g</p>
    </div>
  );
};

export default RecipeSummary;
