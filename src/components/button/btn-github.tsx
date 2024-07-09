import React from 'react'

const Button: React.FC<{ link: string; icon?: string; text?: string }> = ({
  link,
  icon,
  text,
}) => {
  return (
    <a
      className='project-details__button'
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      <img src={icon} alt='gitHub-black-icon' />
      {text}
    </a>
  )
}

export default Button
