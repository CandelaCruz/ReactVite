import React, { useState } from 'react';
import { ingredientsData } from '../Data/ingredientsData';
import './CreateRecipe.css';
import IngredientList from './IngredientList/IngredientList';
import RecipeBuilder from './RecipeBuilder/RecipeBuilder';
import RecipeSummary from './RecipeSummary/RecipeSummary';
import RecipeSteps from './RecipeSteps/RecipeSteps';
import { TbBowlSpoon } from "react-icons/tb";
import { MdOutlineSaveAlt } from "react-icons/md";
const CreateRecipe = () => {
    const [title, setTitle] = useState('');
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [image, setImage] = useState(null); 
  
    const handleSelectIngredient = (ingredient) => {
      if (!selectedIngredients.some(item => item.id === ingredient.id)) {
        setSelectedIngredients([...selectedIngredients, { ...ingredient, quantity: 1 }]);
      }
    };
  
    const handleUpdateQuantity = (id, quantity) => {
      setSelectedIngredients(prev =>
        prev.map(ingredient =>
          ingredient.id === id ? { ...ingredient, quantity } : ingredient
        )
      );
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result); 
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleSaveRecipe = () => {
      // Calcular el informe nutricional
      const nutrition = calculateNutrition(selectedIngredients);
  
      // Crear el objeto de receta
      const recipe = {
        title,
        ingredients: selectedIngredients,
        steps,
        image, 
        nutrition
      };
  
      // Recuperar las recetas del localStorage o inicializar un array vacío si no hay recetas guardadas
      const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
  
      // Añadir la nueva receta al historial
      storedRecipes.push(recipe);
  
      // Guardar nuevamente en el localStorage
      localStorage.setItem('recipes', JSON.stringify(storedRecipes));
  
      // Limpiar los estados después de guardar
      setTitle('');
      setSelectedIngredients([]);
      setSteps([]);
      setImage(null);
    };
  
    const calculateNutrition = (ingredients) => {
      return ingredients.reduce(
        (acc, ingredient) => ({
          calories: acc.calories + ingredient.calories * ingredient.quantity,
          protein: acc.protein + ingredient.protein * ingredient.quantity,
          carbs: acc.carbs + ingredient.carbs * ingredient.quantity
        }),
        { calories: 0, protein: 0, carbs: 0 }
      );
    };
  
    return (
        <section id='CreateRecipe'className='create-recipe container '>
      <div>
        <h2 className='text-center slideLine'>Create Your New Recipe <TbBowlSpoon className='mb-2' /></h2> 
        <label htmlFor="">Name of the recipe:</label>
        <input className='input-container'
          type="text"
          placeholder="Name Of The Recipe"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <div>
          <label>Upload Recipe Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {image && <img src={image} alt="Vista previa" style={{ width: '180px', height: '170px', marginTop: '10px', display: "flex", margin: "0 auto", borderRadius: "100%"}} />}
        </div>
  
        <IngredientList ingredients={ingredientsData} onSelectIngredient={handleSelectIngredient} />
        <RecipeBuilder
          selectedIngredients={selectedIngredients}
          onUpdateQuantity={handleUpdateQuantity}
        />
        <RecipeSummary ingredients={selectedIngredients} />
        <RecipeSteps steps={steps} setSteps={setSteps} />
        <button className='save-recipe te' onClick={handleSaveRecipe}>Save Recipe <MdOutlineSaveAlt className='mb-1 fs-5' /></button>
      </div>
      </section>
    );
  };
  
  export default CreateRecipe;