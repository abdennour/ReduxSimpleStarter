import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { searchYoutube } from '../api';
class App extends Component {
  state = { videos: [], selectedVideo: null };
  videoShape = { snippet: {}, id: {} };
  componentDidMount() {
    this.searchVideo('Today news');
  }

  searchVideo = term => {
    searchYoutube(term, videos =>
      this.setState({
        videos,
        selectedVideo: videos.length
          ? { ...videos[0].snippet, ...videos[0].id }
          : videoShape
      })
    );
  };
  render() {
    return (
      <div>
        <div className="row">
          <SearchBar onSearchTermChange={this.searchVideo} />
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
