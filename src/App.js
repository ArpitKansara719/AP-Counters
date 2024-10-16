import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';

const App = () => {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem('recipes');
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="app">
      <h1>Recipe App</h1>
      <AddRecipe addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
