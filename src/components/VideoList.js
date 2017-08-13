import React from 'react';
import VideoListItem from './VideoListItem';

function VideoList({ videos, ...rest }) {
  return (
    <ul className="col-md-4 list-group">
      {videos &&
        videos.map(({ snippet, id, etag }, i) =>
          <VideoListItem key={etag} {...snippet} {...id} {...rest} />
        )}
    </ul>
  );
}

export default VideoList;
