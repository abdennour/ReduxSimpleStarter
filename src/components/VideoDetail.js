import React from 'react';
function VideoDetail({ title, description, videoId, ...rest }) {
  if (!videoId) return <div>Loading...</div>;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>
          {title}
        </div>
        <div>
          {description}
        </div>
        <div />
      </div>
    </div>
  );
}

export default VideoDetail;
