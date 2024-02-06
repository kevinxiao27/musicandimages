import React from "react";

const MusicPlayer = ({ embedUrl }) => {
  return (
    <div className="music-player">
      <iframe
        title="Music Player"
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={embedUrl}
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
