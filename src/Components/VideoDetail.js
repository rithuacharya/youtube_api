import React, { Component } from "react";
import "./VideoDetail.css"

class VideoDetail extends Component {
  render() {
    let {id, title, description, autoplay} = this.props.videoInfo || {};
    autoplay = autoplay ? "?autoplay=1&mute=1" : "";
    return (
      <div className="video_detail_container">
        {id && 
        <div>
          <div className="video_player">
            <iframe src={`http://www.youtube.com/embed/${id}${autoplay}`} width="100%" frameBorder="0" title="video_player" allowFullScreen></iframe>
          </div>
          <div className="video_detail">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      }
      </div>
    );
  }
}

export default VideoDetail;