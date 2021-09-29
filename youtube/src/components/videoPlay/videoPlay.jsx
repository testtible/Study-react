import React from 'react';
import styles from './videoPlay.module.css';

const VideoPlay = ({ video, video: {snippet} }) => {
  return (
    <div className={styles.body}>
      <div>
        <iframe 
          className={styles.video}
          title="youtube player"
          width="100%"
          height="400px"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen>Video play
        </iframe>
      </div>
      <h2>{snippet.title}</h2>
      <h4>{snippet.channelTitle}</h4>
      <pre className={styles.desc}>{snippet.description}</pre>
    </div>
  );
};

export default VideoPlay;


// import React from 'react';

// const Video = ({ video }) => {
//   const { thumbnails,  } = video.snippet;
//   return (
//     <div>
//       <video src={thumbnails.url}>Play video</video>
//     </div>
//   );
// };

// export default Video;