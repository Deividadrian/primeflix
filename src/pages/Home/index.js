import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=6da46feeb28fbf25e6f8094e9e236faf&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '6da46feeb28fbf25e6f8094e9e236faf',
          language: 'pt-BR',
          page: 1
        }
      })
      //console.log(response.data.results.slice(0, 10))

      setFilmes(response.data.results.slice(0, 20))
      setLoading(false)
    }

    loadFilmes()
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      {filmes.map(filme => {
        return (
          <div key={filme.id} className="cardfilme">
            <Link to={`/filme/${filme.id}`}>
              <img
                src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <strong>
                <p className="titlefilme">{filme.title}</p>
              </strong>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Home
