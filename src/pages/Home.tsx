import React from 'react'

import Header from '../components/header/header'

const Home = () => {
  return (
    <>
      <Header />
      <main className='content'>
        <div className='container'>
          <ul className='content__lists'>
            <li className='content__list'>
              <h2 className='content__list-title'>Frontend</h2>
              <p className='content__description'>
                JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap,
                MaterialUI, Yarn, TailwindCSS, StyledComponents
              </p>
            </li>
            <li className='content__list'>
              <h2 className='content__list-title'>Backend</h2>
              <p className='content__description'>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home
