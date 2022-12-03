import React from 'react'
import { Link } from 'react-router-dom'
import '../Nav/Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>

      <li className='nav-logo'><Link to='/'>ecc</Link></li>

      <ul className='nav-box'>
        <li><Link to='Careers'>Carreras</Link></li>
        <li><Link to="Aboutus">Nosotros</Link></li>
        <li><Link >Noticias</Link></li>
        <li><Link to="Contact">Contacto</Link></li>
        <li className='btn-user'><Link to="Login">Ingresar</Link></li>
        <li className='btn-user'><Link to="Singin">Regístrarse</Link></li>
      </ul>

    </nav>
  )
}

export default Nav
