import { Link } from 'react-router-dom';
import { FaHeart, FaClock } from 'react-icons/fa';
import './Recipe.css';

export default function RecipeCard({ recipe}) {
    return (
        <div className="recipe-card">
            <Link to={`/recipes/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-info">
                <h3>{recipe.title}</h3>
                <div className="meta-data">
                    <span><FaClock /> {recipe.time}</span>
                    <span>{recipe.calories} kcal</span>
                </div>
            </div>
        </Link>
    </div>
    );
}