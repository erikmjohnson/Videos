import axios from 'axios';

const KEY = 'AIzaSyAqVzHcIvyRSYMZ6Pzu56K0r2lgP4DLC3w';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});
