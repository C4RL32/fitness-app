import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoGallery from './pages/videos/VideoGallery';
import viteLogo from '/vite.svg';
import reactLogo from '/assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/videos" element={<VideoGallery />} />
        <Route path="/" element={
          <>
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
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