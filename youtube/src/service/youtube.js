import axios from 'axios';
class Youtube {
  constructor(key) {
    this.key = key;  
  }

  async mostPopular() {
    const url = `https://www.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResults=12&key=${this.key}`;
    return await axios.get(url)
    .then(res => {
      return res.data.items;
    })
  }

  search(text) {
    const url = `https://www.googleapis.com/youtube/v3/search/?part=snippet&chart=mostPopular&maxResults=12&q=${text}&type=video&key=${this.key}`;
    return axios.get(url)
    .then(res => {
      const data = res.data.items.map(el => ({...el, id: el.id.videoId}))
      return data;
    })
  }

}

export default Youtube;

// 네트워크 처리.