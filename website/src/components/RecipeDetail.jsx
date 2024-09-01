import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipes from '../data/recipes';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));
  const navigate = useNavigate();
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      let imageFetched = false;
      while (!imageFetched) {
        const response = await fetch('https://random.dog/woof.json');
        const data = await response.json();

        if (data.url.endsWith('.jpg') || data.url.endsWith('.jpeg') || data.url.endsWith('.png') || data.url.endsWith('.gif')) {
          setDogImage(data.url);
          imageFetched = true;
        }
      }
    };

    fetchDogImage();
  }, []);

  if (!recipe) {
    return <h2>Receptet kunde inte hittas</h2>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      {dogImage && (
        <div style={{ marginBottom: '20px' }}>
          <h3>slumpad hundbild!</h3>
          <img
            src={dogImage}
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
          />
        </div>
      )}
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

      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Tillbaka till startsidan
      </button>
    </div>
  );
};

export default RecipeDetail;