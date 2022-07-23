import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './filme.css'

function Filme() {
  const { id } = useParams()
  const navigate = useNavigate()
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
          navigate('/', { replace: true })
        })
    }
    loadFilme()
  }, [])

  function salvarFilme() {
    const myList = localStorage.getItem('@primeflix')

    let filmeSalvos = JSON.parse(myList) || []

    const hasFilme = filmeSalvos.some(filmeSalvo => filmeSalvo.id === filme.id)

    if (hasFilme) {
      alert('ESSE FILME JÁ ESTA NA LISTA')
      return
    }

    filmeSalvos.push(filme)
    localStorage.setItem('@primeflix', JSON.stringify(filmeSalvos))
    alert('FILME SALVO COM SUCESSO')
  }

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
        <h1>{`${filme.title} (${filme.release_date.slice(0, 4)})`}</h1>
        <strong className="overview">{filme.overview}</strong>
        <strong className="nota">Nota: {filme.vote_average}</strong>

        <div className="area-button">
          <button onClick={salvarFilme}>Salvar</button>
          <button>
            <a
              target="blank"
              rel="external"
              href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`}
            >
              Trailer
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filme
