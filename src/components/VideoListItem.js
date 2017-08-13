import React from 'react';
function VideoListItem({ title, videoId, ...rest }) {
  return (
    <li
      className="list-group-item video-item"
      onClick={event => rest.onVideoSelect({ title, videoId, ...rest })}
    >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={rest.thumbnails.default.url} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
