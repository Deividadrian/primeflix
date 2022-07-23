import { useEffect, useState } from 'react'
import './favoritos.css'
import { Link } from 'react-router-dom'

function Favoritos() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const minhaLista = localStorage.getItem('@primeflix')
    setFilmes(JSON.parse(minhaLista) || [])
  }, [])

  return (
    <div className="meus-filmes">
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

export default Favoritos
