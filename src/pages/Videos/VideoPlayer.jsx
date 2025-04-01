import ReactPlayer from 'react-player';
import './Videos.css';

export default function VideoPlayer({ video, onClose }) {
  return (
    <div className="video-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>{video.title}</h3>
        <ReactPlayer
          url={video.url}
          controls={true}
          width="100%"
          height="400px"
        />
      </div>
    </div>
  );
}