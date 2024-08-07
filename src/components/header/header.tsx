import React from 'react'
import './style.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <h1 className='header__title'>
          <strong>
            Hi, my name is <span>Albert</span>
          </strong>{' '}
          a Fullstack developer
        </h1>
        <p className='header__subtitle'>
          with passion for learning and creating.
        </p>
      </div>
      <a href='./Taygibov-Albert-CV.pdf' className='header__btn' download>
        Download CV
      </a>
    </header>
  )
}

export default Header
