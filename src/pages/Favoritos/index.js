import { useEffect, useState } from 'react'
import './favoritos.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Favoritos() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const minhaLista = localStorage.getItem('@primeflix')
    setFilmes(JSON.parse(minhaLista) || [])

    setLoading(false)
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

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter(filme => {
      return filme.id !== id
    })
    setFilmes(filtroFilmes)
    localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes))
    toast.success('FILME REMOVIDO')
  }

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
            <button onClick={() => excluirFilme(filme.id)} className="excluir">
              Excluir
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Favoritos
