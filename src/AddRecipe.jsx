import React, { useState } from 'react';

const AddRecipe = ({ addRecipe }) => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !ingredients || !instructions) return;

        const newRecipe = { name, ingredients, instructions };
        addRecipe(newRecipe);
        setName('');
        setIngredients('');
        setInstructions('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Recipe Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                placeholder="Ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />
            <textarea
                placeholder="Instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipe;
