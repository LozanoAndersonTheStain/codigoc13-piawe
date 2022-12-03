import React from 'react'
import '../Contact/Contact.css'

const Contact = () => {
  return (
    <footer className='footer'>
        <section>
            <h2>Siguenos en nuestras redes sociales o envianos un mensaje</h2>
            <article className='social-media'>
                <a rel='noreferrer' target='_blank' href="https://www.facebook.com/">Facebook</a>
                <a href="/">Instagram</a>
                <a href="/">Twitter</a>
                <a href="mailto:codigoc13@codigoc13.com">Gmail</a>
            </article>
        </section>
    </footer>
  )
}

export default Contact