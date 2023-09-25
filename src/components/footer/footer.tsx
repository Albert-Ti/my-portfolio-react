import React from 'react'
import iconVk from '../..//image/icons/vk.svg'
import iconGitHub from '../..//image/icons/gitHub.svg'
import iconInstagram from '../..//image/icons/instagram.svg'
import iconLinkedIn from '../..//image/icons/linkedIn.svg'
import iconTwitter from '../..//image/icons/twitter.svg'

import './style.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='social'>
        <li>
          <a target='_blank' rel='noreferrer' href='https://vk.com/id167363228'>
            <img src={iconVk} alt='icon-vk' />
          </a>
        </li>
        <li>
          <a href='#!'>
            <img src={iconInstagram} alt='icon-instagram' />
          </a>
        </li>
        <li>
          <a href='#!'>
            <img src={iconTwitter} alt='icon-twitter' />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://github.com/Albert-Ti'>
            <img src={iconGitHub} alt='icon-gitHub' />
          </a>
        </li>
        <li>
          <a href='#!'>
            <img src={iconLinkedIn} alt='icon-linkedIn' />
          </a>
        </li>
      </ul>
      <div className='copyright'>
        <p>© 2023 Albert Taygibov</p>
      </div>
    </footer>
  )
}

export default Footer
