import { FaSearch, FaUserCircle  } from "react-icons/fa";


function Header() {

  return (
    <header>  

        <h1>NOME</h1>

        <nav>
            <div>PESQUISAR <FaSearch />  </div>
            <a>VISTOS</a>
            <a>LISTA</a>
            <a>USUÁRIO <FaUserCircle /></a>
        </nav>

    </header>
  )
}

export default Header
