import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>oops! pagina non trovato</h1>
        <Link to="/" className='btn btn-primary'>
          Torna nella Home
        </Link>
      </div>
    </section>
  )
}

export default Error
