import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { searchYoutube } from '../api';
class App extends Component {
  state = { videos: [], selectedVideo: null };
  videoShape = { snippet: {}, id: {} };
  componentDidMount() {
    searchYoutube('ReactJS', videos =>
      this.setState({
        videos,
        selectedVideo: videos.length
          ? { ...videos[0].snippet, ...videos[0].id }
          : videoShape
      })
    );
  }
  render() {
    return (
      <div>
        <div className="row">
          <SearchBar />
        </div>
        <VideoDetail {...this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

export default App;
