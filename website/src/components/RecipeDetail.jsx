import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipes from '../data/recipes';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));
  const navigate = useNavigate();

  if (!recipe) {
    return <h2>Receptet kunde inte hittas</h2>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      
      <h3>Ingredienser</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      
      <h3>Instruktioner</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      
      <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Tillbaka till startsidan
      </button>
    </div>
  );
};

export default RecipeDetail;