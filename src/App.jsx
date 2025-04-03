import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa react-router-dom
import VideoGallery from './pages/Videos/VideGallery'; // Importa tu componente
import './App.css'; // Opcional: conserva tus estilos si los necesitas
import MainLayout from "./components/common/layout/MainLayout";


function App() {
  const [count, setCount] = useState(0); // Puedes mantener esto si lo usas

  return (
    <Router>
      <Routes>
        {/* Ruta para la galería de videos */}
        <Route path="/videos" element={<VideoGallery />} />


        {/* Ruta principal (opcional: conserva el template original) */}
        <Route path="/" element={
          <>
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src="/react.svg" className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;