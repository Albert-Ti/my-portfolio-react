import React from 'react'

const Contacts = () => {
  return (
    <main className='content'>
      <div className='container'>
        <h1 className='content__title'>Contacts</h1>
        <ul className='content__lists'>
          <li className='content__list'>
            <h2 className='content__list-title'>Location</h2>
            <p className='content__description'>Moscow, Russia</p>
          </li>
          <li className='content__list'>
            <h2 className='content__list-title'>Telegram / WhatsApp</h2>
            <p className='content__description'>
              <a href='tel:+79680400045'>+7 (948) 040-00-45</a>
            </p>
          </li>
          <li className='content__list'>
            <h2 className='content__list-title'>Email</h2>
            <p className='content__description'>
              <a href='email:albert.taygibov@mail.ru'>
                albert.taygibov@mail.ru
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Contacts
