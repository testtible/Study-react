import React from 'react';
import Content from '../content/content';
import styles from './contents.module.css';

const Contents = ({ data, handleClickVideo, display }) => {

  return (
    <div className={styles.contents_body}>
      {data.map(el => {
        return <Content
          key={el.id}
          data={el}
          handleClickVideo={handleClickVideo}
          display={display} />
      })}
    </div>
  );
};

export default Contents;