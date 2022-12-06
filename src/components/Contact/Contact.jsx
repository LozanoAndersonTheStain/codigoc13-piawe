import React from 'react'
import '../Contact/Contact.css'

const Contact = () => {
  return (
    <footer id='#contact' className='footer'>
        <section>
            <h2>Siguenos en nuestras redes sociales o envianos un mensaje</h2>
            <article className='social-media'>
                <a rel='noreferrer' target='_blank' href="https://www.facebook.com/people/Corporaci%C3%B3n-Afrolombiana-Son-Bat%C3%A1/100070769784846/">Facebook</a>
                <a rel='noreferrer' target='_blank' href="https://www.instagram.com/codigo_c13/">Instagram</a>
                <a rel='noreferrer' target='_blank' href="https://twitter.com/codigoc13">Twitter</a>
                <a rel='noreferrer' target='_blank' href="mailto:codigoc13@codigoc13.com">Gmail</a>
            </article>
        </section>
    </footer>
  )
}

export default Contact