// RecipeSteps.jsx
import React, { useState } from 'react';
import './RecipeSteps.css';
const RecipeSteps = ({ steps, setSteps }) => {
  const [newStep, setNewStep] = useState('');

  const handleAddStep = () => {
    if (newStep.trim() !== '') {
      setSteps([...steps, newStep]);
      setNewStep('');
    }
  };

  return (
    <div className='recipe-steps'>
      <h3>Recipe Steps</h3>
      <ol className=''>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <input
        type="text"
        value={newStep}
        onChange={(e) => setNewStep(e.target.value)}
        placeholder="Add a step"
      />
      <button className='add-step'  onClick={handleAddStep}>Add A Step</button>
    </div>
  );
};

export default RecipeSteps;
