import React from 'react'
import { Link } from 'react-router-dom'
import iconGitHub from '../../assets/icons/gitHub-white.svg'
import iconHHru from '../../assets/icons/hh.svg'
import iconTelegram from '../../assets/icons/telegram.svg'
import iconVk from '../../assets/icons/vk.svg'
import './style.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='social'>
        <li>
          <Link
            target='_blank'
            rel='noreferrer'
            to='https://github.com/Albert-Ti'
          >
            <img src={iconGitHub} alt='icon-gitHub' />
          </Link>
        </li>
        <li>
          <Link
            target='_blank'
            rel='noreferrer'
            to='https://t.me/albert_taygibov'
          >
            <img src={iconTelegram} alt='icon-telegram' />
          </Link>
        </li>
        <li>
          <Link
            target='_blank'
            rel='noreferrer'
            to='https://hh.ru/resume/7393af3fff0d3696330039ed1f684471623248'
          >
            <img src={iconHHru} alt='icon-hh.ru' />
          </Link>
        </li>
        <li>
          <Link
            target='_blank'
            rel='noreferrer'
            to='https://vk.com/id167363228'
          >
            <img src={iconVk} alt='icon-vk' />
          </Link>
        </li>
      </ul>
      <div className='copyright'>
        <p>
          <span>© Albert Taygibov</span> 2023
        </p>
      </div>
    </footer>
  )
}

export default Footer
