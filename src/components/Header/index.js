import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">
        PRIMEFLIX
      </Link>
      <Link to="/favoritos" className="favoritos">
        Meus Filmes
      </Link>
    </div>
  )
}

export default Header
