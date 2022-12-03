import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aboutus from './components/Aboutus/Aboutus'
import Careers from './components/Careers/Careers'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Login from './components/User/Login'
import SingIn from './components/User/SingIn'


const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Header/>}/>
        <Route path='/Careers' element={<Careers/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Singin' element={<SingIn/>}/>
      </Routes>
    </div>
  )
}

export default App

