import erro from './erro.css'
import { Link } from 'react-router-dom'

function Erro() {
  return (
    <div className="erro-container">
      <h1>404</h1>
      <h6>Pagina não encontrada!</h6>
      <Link to={'/'}>Veja todos filmes</Link>
    </div>
  )
}

export default Erro
