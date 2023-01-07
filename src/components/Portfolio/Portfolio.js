import React from 'react'
import Home from '../Home/Home.js'
import About from '../About/About.js'
import Contacts from '../Contacts/Contacts.js'
import Works from '../Works/Works.js'
import { Route, Routes, Link } from 'react-router-dom'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/works'>Works</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contacts'>Contacts</Link></li>
        </ul>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/contacts' element = {<Contacts/>}/>
            <Route path='/works' element = {<Works/>}/>
        </Routes>
    </div>
  )
}

export default Portfolio