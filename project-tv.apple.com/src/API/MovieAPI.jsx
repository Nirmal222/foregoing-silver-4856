import axios from 'axios';

const getData = (page=1)=>{
  return axios(`https://api.themoviedb.org/3/movie/popular?api_key=aab69345023f012e488f5334e693cb59&language=en-US&page=${page}`);
}
export default getData;

// https://api.themoviedb.org/3/movie/popular?api_key=aab69345023f012e488f5334e693cb59&language=en-US&page=1