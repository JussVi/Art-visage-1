import React from 'react';
import video from '../../visual/videos/video-background.mp4'
import './style.css'

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;