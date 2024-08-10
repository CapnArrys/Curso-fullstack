import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='menu'>

        <div className='logo'>

            <Link to='/'>
                <img src='/PRODUCT-manager-logo.png' alt="logo do site" className='logo-img' />
            </Link>
            
        </div>

        <div className='menu-links'>

            <Link to='/add-fornecedores'>Adicionar Fornecedor</Link>
            <Link to='/listar-fornecedores'>Listar Fornecedores</Link>
            <Link to='/add-clientes'>Adicionar Clientes</Link>
            <Link to='/listar-clientes'>Listar Clientes</Link>

        </div>
    </nav>
  )
}

export default Navbar