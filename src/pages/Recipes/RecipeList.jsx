import { useState } from  'react';
import { recipes, categories } from './recipesData';
import RecipeCard from './RecipeCard';
import './Recipe.css';

export default function RecipeList() {
    const [currentCategory, setCurrentCategory] = useState('Todas');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredRecipes = recipes
    .filter(recipe => recipe && recipe.title) // ✅ Asegura que haya receta y título
    .filter(recipe =>
        currentCategory === 'Todas' || recipe.category === currentCategory
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
                    className={currentCategory === category ? 'active' : ''} // ✅ fix aquí
                  >
                    {category}
                  </button>
                  
                ))}
            </div>

            {/*Listado */}
            {filteredRecipes.length === 0 ? (
            <p>No se encontraron recetas.</p>
        ) : (
            <div className="recipes-grid">
             {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
            )}
        </div>
    );
}