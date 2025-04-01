import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import VideoGallery from './pages/Videos/VideoGallery'; // Asegúrate que el nombre del archivo sea correcto
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import RecipeList from "./pages/Recipes/RecipeList";
import RecipeDetail from "./pages/Recipes/RecipeDetail";
import Home from "./pages/Home/Home";
import './App.css';

function App() {
  console.log("App cargada");
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas de autenticación */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Ruta de videos */}
          <Route path="/videos" element={<VideoGallery />} />

          {/*Ruta de Recetas */}
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          
          {/* Ruta principal */}
          <Route path="/" element={<Home />} />
          
          {/* Ruta por defecto para páginas no encontradas */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;