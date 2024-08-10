import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Inicial</Link><br></br>


        <Link to="/noticias">Notícias</Link><br></br>

        <Link to="/dpo-lgpd">Lgpd</Link><br></br>
    </div>
  )
}

export default Navbar