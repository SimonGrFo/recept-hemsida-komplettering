import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import recipes from '../data/recipes'; 

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>kokboken.se</h1>
      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Sök recept..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '12px 20px',
            width: '20%',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        />

        {searchTerm && (
          <ul style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            border: '1px solid #ddd',
            borderRadius: '8px',
            marginTop: '4px',
            padding: '0',
            listStyleType: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            zIndex: 1000,
            maxHeight: '200px',
            overflowY: 'auto',
          }}>
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <li key={recipe.id} style={{
                  padding: '12px 20px',
                  borderBottom: '1px solid #eee',
                }}>
                  <Link to={`/recipe/${recipe.id}`} style={{
                    textDecoration: 'none',
                    color: '#333',
                    display: 'block',
                  }}>
                    {recipe.name}
                  </Link>
                </li>
              ))
            ) : (
              <li style={{ padding: '12px 20px', color: '#999' }}>No recipes found.</li>
            )}
          </ul>
        )}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
      }}>
        {recipes.slice(0, 8).map((recipe) => (
          <div key={recipe.id} style={{
            border: '1px solid #ddd',
            borderRadius: '12px',
            padding: '20px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
            textAlign: 'center',
          }}>
            <Link to={`/recipe/${recipe.id}`} style={{
              textDecoration: 'none',
              color: '#333',
            }}>
              <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>{recipe.name}</h2>
              <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>{recipe.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;