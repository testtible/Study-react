import React from 'react';
import styles from './content.module.css';

const Content = ({ data, handleClickVideo, display }) => {
  const { title, channelTitle } = data.snippet;
  const displayType = display === 'list' ? styles.list : styles.twoList;
  // console.log(displayType);
  // styles에 string형으로 적으면 string형으로 들어감. (실수)
  return (
    <div className={`${styles.content_body} ${displayType}`} onClick={() => handleClickVideo(data)}>
      <div className={styles.content}>
        <div className={styles.thumbnail}>
          <img src={data.snippet.thumbnails.default.url} alt="thumbnail"></img>
        </div>
        <div className={styles.desc}>
          <div>{title}</div>
          <div className={styles.channelTitle}>{channelTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Content;

