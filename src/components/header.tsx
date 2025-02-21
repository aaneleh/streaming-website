import { FaSearch, FaUserCircle  } from "react-icons/fa";


function Header() {

  return (
    <header>  

        <h1>NOME</h1>

        <nav>
          <div className="searchbar">
            <input type="text" placeholder="PESQUISAR"/>
            <FaSearch />
          </div>
          <a>
            <p>VISTOS</p>
          </a>
          <a>
            <p>LISTA</p>
          </a>
          <a className="userlink">
            <p>USUÁRIO</p>
            <FaUserCircle />
          </a>
        </nav>

    </header>
  )
}

export default Header
