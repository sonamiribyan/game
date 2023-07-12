import React from 'react';
import './WinningNumber.css';
import ReactPlayer from 'react-player';
import videopath from '../../videos/video_2023-07-11_20-08-29.mp4';

const VideoPlayer = () => {
    return (
      <div>
        <ReactPlayer
            url={videopath}
            playing={true}
            width='100%'
            height='35vh'
            config={{ file: { attributes: {
                autoPlay: true,
                muted: true
            }}}}
        />
      </div>
    );
  };
  
  export default VideoPlayer;