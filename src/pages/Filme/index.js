import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import './filme.css'

function Filme() {
  const { id } = useParams()
  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: '6da46feeb28fbf25e6f8094e9e236faf',
            language: 'pt-BR'
          }
        })
        .then(response => {
          setFilme(response.data)
          setLoading(false)
        })
        .catch(() => {
          console.log('FILME NÃO ENCONTRADO!')
        })
    }
    loadFilme()
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
    <div className="containerfilme">
      <img
        src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <div className="sinopse">
        <h1>{`${filme.title} (${filme.release_date.slice(0, -6)})`}</h1>
        <strong className="overview">{filme.overview}</strong>
        <strong className="nota">{filme.vote_average}</strong>
      </div>
    </div>
  )
}

export default Filme
