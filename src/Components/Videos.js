import React, { Component } from "react";
import "./Videos.css";

class Videos extends Component {
  render() {
    let videos = this.props.videos.map(video => {
      let {videoId:id} = video.id,
          {title, description} = video.snippet,
          {url} = video.snippet.thumbnails.medium;
      return (
        <div className="video" key={id} onClick={() => this.props.videoInfo({
            id,
            title,
            description,
            // autoplay video
            autoplay: true
          })}
        >
          <div className="video_thumbnail">
            <img src={url} alt="thumbnail" width="240" height="120" />
          </div>
          <div className="video_info">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="video_list_container">
        {videos}
      </div>
    );
  }
}

export default Videos;