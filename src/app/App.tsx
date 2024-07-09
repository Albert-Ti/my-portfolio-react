import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Footer from '../components/footer/footer'
import Nav from '../components/nav/nav'
import Contacts from '../pages/Contacts'
import Home from '../pages/Home'
import ProjectDetails from '../pages/Project-details'
import Projects from '../pages/Projects'
import '../styles/main.css'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project-details/:id' element={<ProjectDetails />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
