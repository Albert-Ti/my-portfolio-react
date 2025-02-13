import React from 'react'
import { Link } from 'react-router-dom'

const LinkBtn: React.FC<{ link: string; icon?: string; text?: string }> = ({
  link,
  icon,
  text,
}) => {
  return (
    <Link className='link-btn' to={link} target='_blank' rel='noreferrer'>
      {icon && <img src={icon} alt='icon-LinkBtn' />}
      {text}
    </Link>
  )
}

export default LinkBtn
