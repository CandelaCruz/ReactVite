// IngredientList.jsx
import React, { useState } from 'react';
import './IngredientList.css';

const IngredientList = ({ ingredients, onSelectIngredient }) => {
  const [selectedIngredientId, setSelectedIngredientId] = useState('');

  // Manejar la selección de un ingrediente desde el menú desplegable
  const handleSelectChange = (e) => {
    const selectedId = parseInt(e.target.value, 10); // Convertir a número
    setSelectedIngredientId(selectedId);

    // Encontrar el ingrediente seleccionado en la lista
    const selectedIngredient = ingredients.find(ingredient => ingredient.id === selectedId);

    if (selectedIngredient) {
      onSelectIngredient(selectedIngredient); // Llamar al callback con el ingrediente seleccionado
    }
  };

  return (
    <div className='ingredient-list'>
      <h3>Select an Ingredient</h3>
      <label htmlFor="ingredient-select">Ingredients:</label>
      <select
        id="ingredient-select"
        value={selectedIngredientId}
        onChange={handleSelectChange}
      >
        <option value="">Select </option>
        {ingredients.map(ingredient => (
          <option key={ingredient.id} value={ingredient.id}>
            {ingredient.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default IngredientList;