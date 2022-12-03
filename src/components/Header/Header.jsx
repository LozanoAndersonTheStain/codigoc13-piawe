import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'

const Header = () => {
  return (
    <header className='header'>
        <section>
            <h1>— Conviertete en <span>desarrollador web</span></h1>
            <p>Certificate en desarrollo web profesional para la transformación digital.</p>
            <li className='link-header'><Link>Más información</Link></li>
        </section>

        <picture className='image-hrader'>
            <img src="https://ouch-cdn2.icons8.com/OQ3yuVTnKqAb4khnDpO7_KBTgYEZFOxQQSTIg3787mg/rs:fit:256:458/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTYz/L2Q3ZTAzZDAzLWIw/MGQtNDgyMi05OWQ1/LTMxMmVhMTJkNTY3/My5wbmc.png" alt="" />
        </picture>
    </header>
  )
}

export default Header
