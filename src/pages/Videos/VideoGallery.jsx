import { useState } from 'react';
import ReactPlayer from 'react-player';
import { videolist, categories } from './videoData';
import VideoPlayer from './VideoPlayer';
import './Videos.css';

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('todos');

  const filteredVideos = currentCategory === 'todos'
    ? videolist
    : videolist.filter(video => video.category === currentCategory);

  return (
    <div className='video-gallery'>
      <h2>Rutinas de Ejercicios</h2>

      {/* Filtros por categoría */}
      <div className='category-filters'>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setCurrentCategory(category)}
            className={currentCategory === category ? 'active' : ''}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Listado de videos */}
      <div className="video-grid">
        {filteredVideos.map(video => (
          <div
            key={video.id}
            className="video-card"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="video-thumbnail">
              <ReactPlayer
                url={video.url}
                width="100%"
                height="100%"
                light={true}
              />
            </div>
            <h3>{video.title}</h3>
            <p>{video.duration}</p>
          </div>
        ))}
      </div>

      {/* Modal reproductor */}
      {selectedVideo && (
        <VideoPlayer
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}