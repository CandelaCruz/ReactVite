// RecipeHistory.jsx
import React, { useState, useEffect } from 'react';
import "./RecipeHistory.css"
import RecipeCard from './RecipeCard/RecipeCard';
import { FaHistory } from "react-icons/fa";

const RecipeHistory = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Para mostrar detalles de una receta específica

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  const handleDeleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe); // Cambiar a la vista de detalles
  };

  const handleBackToList = () => {
    setSelectedRecipe(null); // Volver a la lista principal
  };

  return (
    <section id='RecipeHistory' className='container'>
    <div>
      <h2 className=' SlideLine text-center fw-bolder'>Recipe History <FaHistory /></h2>
    
      {selectedRecipe ? (
        <RecipeDetails recipe={selectedRecipe} onBack={handleBackToList} />
      ) : (
        recipes.length === 0 ? (
          <p>You do not have saved recipes.</p>
        ) : (
          recipes.map((recipe, index) => (
            <RecipeCard 
              key={index} 
              recipe={recipe} 
              onDelete={() => handleDeleteRecipe(index)} 
              onViewDetails={() => handleViewDetails(recipe)} 
            />
          ))
        )
      )}
    </div>
    </section>
  );
};

export default RecipeHistory;