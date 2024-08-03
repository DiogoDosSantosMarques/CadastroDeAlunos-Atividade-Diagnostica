import React from 'react'

import { Link } from 'react-router-dom'

import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className='navbar'>

      <Link to="/">

      <span> Home</span>

    </Link>

            <ul>
            
              <li>
                <Link to="/cadastrar">Cadastrar Aluno</Link>
              </li>

              <li>
                <Link to="/listar">Listar Aluno</Link>
              </li>
            </ul>
      
    </nav>
  )
}

export default NavBar