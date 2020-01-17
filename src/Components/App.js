import React, {Component} from "react";
import youtube from "../api/youtube";
import Search from "./Search";
import Videos from "./Videos";
import VideoDetail from "./VideoDetail";
import "./App.css";

class App extends Component {

  state = {
    videos: [],
    curVideo: null,
    error: null
  }
  
  onFormSubmit = async text => {
    try {
      let res, video;
      res = await youtube.get("/search", {
        params: {
          q: text
        }
      });

      // get the first video
      video = res.data.items[0];

      // set it as the current video
      this.setState({
        videos: res.data.items,
        curVideo: {
          id: video.id.videoId,
          title: video.snippet.title,
          description: video.snippet.description,
          // not allowing video to autoplay
          autoplay: false
        },
        error: null
      });

    } catch (err) {
      this.setState({
        error: err.message
      });
    }
  };

  getVideoInfo = (videoInfo) => {
    let curVideo = {...videoInfo};
    this.setState({
      curVideo,
      error: null
    });
  };

  render() {
    let jsx = null;
    if(!this.state.error) {
      jsx = (
        <div className="video_wrapper">
          <VideoDetail videoInfo={this.state.curVideo} />
          <Videos
            videos={this.state.videos}
            videoInfo={this.getVideoInfo}  
          />
        </div>
      );
    } else {
      jsx = <div>{this.state.error}</div>
    }
    return (
      <div className="ui container" style={{paddingTop: "10px"}}>
        <Search onSubmit={this.onFormSubmit} />
        {jsx}
      </div>
    );
  }
}

export default App;