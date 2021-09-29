import SearchBar from './components/searchBar/searchBar';
import Contents from './components/contents/contents';
import styles from './app.module.css';
import React, { useState, useEffect } from 'react';
import VideoPlay from './components/videoPlay/videoPlay';
// import axios from 'axios';

function App({ youtube }) {
  const [ data, setData ] = useState([]);
  // const [ homeData, setHomeData ] = useState([]);
  const [ video, setVideo ] = useState(null);
  
  useEffect(() => {
    youtube.mostPopular()
      .then(res => setData(res))
  } ,[youtube]);

  const handleClickSearch = (text) => {
    // 여기서 setVideo로 초기화시켜주어도 됨.
    youtube.search(text)
      .then(res => setData(res))
      .then(() => setVideo(null))
      //왜 꼭 then을 사용해서 보여줘야할까?
  }

  const handleClickVideo = (videoData) => {
    setVideo(videoData);
    console.log(videoData);
  }
  
  return (
    <div className={styles.body}>
      <SearchBar handleClickSearch={handleClickSearch} />
      <section className={styles.content}>
        {video && (
          <div className={styles.detail_video}>
            <VideoPlay video={video} />
          </div>
        )}
        <div className={styles.list}>
          <Contents data={data} handleClickVideo={handleClickVideo} display={video ? 'list' : 'twoList'}/>
        </div>
      </section>
    </div>
  );
}
// if문으로 비디오 on off   일단 컴포넌트부터 만들어야함
export default App;

// 1. 네트워크 코드 따로 빼기( class형태로 만들어보기 )
// 2. key값을 .env에 담아보기