import axios from 'axios'
//BASE DA URL: https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=6da46feeb28fbf25e6f8094e9e236faf&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api
