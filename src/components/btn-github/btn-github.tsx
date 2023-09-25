import React from 'react'
import gitHubIcon from './gitHub-black.svg'

const BtnGitHub: React.FC<{ link: string }> = ({ link }) => {
  return (
    <a
      className='project-details__btn'
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      <img src={gitHubIcon} alt='gitHub-black-icon' />
      GitHub repo
    </a>
  )
}

export default BtnGitHub
