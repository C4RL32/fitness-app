import { useState } from  'react';
import { recipes, categories } from './recipesData';
import RecipeCard from './RecipeCard';
import './Recipe.css';

export default function RecipeList() {
    const [currentCategory, setCurrentCategory] = useState('todas');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredRecipes = recipes
    .filter(recipe =>
        currentCategory === 'todas' || recipe.category === currentCategory
    )
    .filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="recipes-container">
            <h2>Recetas Saludables</h2>

            {/*Barra de búsqueda */}
            <input
            type="text"
            placeholder="Buscar recetas..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
            />

            {/* Filtros */}
            <div className="category-filters">
                {categories.map(category => (
                    <button
                    key={category}
                    onClick={() => setCurrentCategory(category)}
                    className={setCurrentCategory === category ? 'active' : ''}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/*Listado */}
            <div className="recipes-grid">
                {filteredRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}