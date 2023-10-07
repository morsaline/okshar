import React from "react";

const YouTubeEmbed = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="video-container">
      <iframe
        // width="560"
        // height="315"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        className="w-full h-[300px]"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
