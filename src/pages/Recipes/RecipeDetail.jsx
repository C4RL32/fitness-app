import { useParams } from 'react-router-dom';
import { recipes } from './recipesData';
import './Recipe.css';

export default function RecipeDetail() {
    const { id } = useParams();
    const recipe = recipes.find(r => r.id === parseInt(id));

    if (!recipe) return <div>Receta no encontrada</div>;

    return (
        <div className="recipe-detail">
            <img src={recipe.image} alt={recipe.title} className="detail-image" />

            <div className="detail-content">
                <h1>{recipe.title}</h1>

                <div className="detail-meta">
                    <span><FaClock /> {recipe.time}</span>
                    <span><FaFire /> {recipe.calories} Kcal</span>
                    <span className="category-badge">{recipe.category}</span>
                </div>

                <div className="detail-section">
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                        ))}
                    </ul>
                </div>

                <div className="detail-setion">
                    <h2>Preparaciçon</h2>
                    <ol>
                        {recipe.steps.map((step, i) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}