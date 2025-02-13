import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const NotFound = () => {
  const { pathname } = useLocation()
  return (
    <main className='content'>
      <div className='container'>
        <h1 className='content__title'>Некорректный путь: {pathname}</h1>
        <Link className='project-details__button' to='/'>
          На главную
        </Link>
      </div>
    </main>
  )
}

export default NotFound
